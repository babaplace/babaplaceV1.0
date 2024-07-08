"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ChangeEvent,
  MouseEvent,
  MouseEventHandler,
  SVGProps,
  useEffect,
} from "react";
import NavigationStep from "./NavigationStep";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react"; // Import useState hook
import { X } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { useEdgeStore } from "@/lib/edgestore";
import { FileState, MultiImageDropzone } from "@/lib/DropzoneImage";
import { useAppartementStore } from "@/lib/zustand/Providers/CreateAppartementStoreProviders";

export default function ImageForm() {
  const { images, addImages, removeImageById } = useAppartementStore(
    (state) => state
  );

  const [fileStates, setFileStates] = useState<FileState[]>(images);
  const { edgestore } = useEdgeStore();
  const router = useRouter();

  function updateFileProgress(key: string, progress: FileState["progress"]) {
    setFileStates((fileStates) => {
      const newFileStates = structuredClone(fileStates);
      const fileState = newFileStates.find(
        (fileState) => fileState.key === key
      );
      if (fileState) {
        fileState.progress = progress;
      }
      return newFileStates;
    });
  }

  console.log(images, fileStates);

  const [error, setError] = useState<String | null>(
    images.length === 0 ? "Il faut au minimuim une images" : null
  );

  const onClickNextButton = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();

    router.push("/appartements/appartement/add/summury");
  };

  return (
    <div className="grid gap-6  max-w-2xl mx-auto p-4 md:p-6">
      <div className="grid gap-6  max-w-2xl  ">
        <MultiImageDropzone
          value={fileStates}
          dropzoneOptions={{
            maxFiles: 12,
          }}
          onChange={(files) => {
            setFileStates(files);
          }}
          onFilesAdded={async (addedFiles) => {
            setFileStates([...fileStates, ...addedFiles]);
            await Promise.all(
              addedFiles.map(async (addedFileState) => {
                try {
                  const res: {
                    url: string;
                    size: number;
                    uploadedAt: Date;
                    metadata: Record<string, never>;
                    path: Record<string, never>;
                    pathOrder: string[];
                  } = await edgestore.publicFiles.upload({
                    options: { temporary: true },
                    file: addedFileState.file as File,
                    onProgressChange: async (progress) => {
                      updateFileProgress(addedFileState.key, progress);
                      if (progress === 100) {
                        // wait 1 second to set it to complete
                        // so that the user can see the progress bar at 100%
                        await new Promise((resolve) =>
                          setTimeout(resolve, 1000)
                        );
                        updateFileProgress(addedFileState.key, "COMPLETE");
                      }
                    },
                  });
                  addImages({
                    key: res.url,
                    file: res.url,
                    progress: "COMPLETE",
                  });
                } catch (err) {
                  updateFileProgress(addedFileState.key, "ERROR");
                }
              })
            );
          }}
        />
      </div>

      <NavigationStep>
        <Link
          href={"/appartements/appartement/add/othersInformations"}
          className={buttonVariants({ variant: "outline" })}
        >
          Precedent
        </Link>
        <Button
          onClick={(e) => onClickNextButton(e)}
          disabled={
            fileStates.length === 0 ||
            images.length === 0 ||
            fileStates.find((file) => file.progress !== "COMPLETE") !==
              undefined
          }
        >
          Suivant
        </Button>
      </NavigationStep>
    </div>
  );
}

function UploadIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}
