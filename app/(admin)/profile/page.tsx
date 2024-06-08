import { Button, buttonVariants } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { getUserWithAppartement } from "@/src/db/user.query";
import { auth } from "@/lib/auth";

export default async function page() {
  const userSession = await auth();

  if (!userSession?.user?.email) {
    return null;
  }

  const user = await getUserWithAppartement(userSession.user.email);

  return (
    <div className="w-full max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">{user?.name ?? user?.email}</h1>
          <p className="text-gray-500">Partenaire immobilier</p>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline">Gérer les propriétés</Button>
        </div>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="flex items-center space-x-4">
          <Avatar className="h-20 w-20">
            <AvatarImage
              src={user?.image ?? ""}
              alt={user?.name ?? user?.email ?? ""}
            />
            <AvatarFallback>
              {(user?.name ?? user?.email)
                ?.charAt(0)
                .toLocaleUpperCase()
                .toString()}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-lg font-medium">{user?.name}</p>
            <p className="text-gray-500">Partenaire immobilier</p>
            <p className="text-gray-500">{user?.email}</p>
            <p className="text-gray-500">{user?.phone}</p>
          </div>
        </div>
        <div className="prose max-w-none">
          <h2>À propos de moi</h2>
          <p>
            Je suis un partenaire immobilier expérimenté avec plus de 10 ans
            d&apos;expérience dans le secteur. Je gère un portefeuille
            diversifié de propriétés résidentielles et commerciales dans la
            région. N&apos;hésitez pas à me contacter pour toute question ou
            opportunité.
          </p>
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4">Mes propriétés</h2>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Prix</TableHead>
                <TableHead>Emplacement</TableHead>
                <TableHead>Ville</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {user?.appartements.map((appartement) => (
                <TableRow key={appartement.id}>
                  <TableCell>{appartement.title}</TableCell>
                  <TableCell>{appartement.price} DH</TableCell>
                  <TableCell>{appartement.address}</TableCell>
                  <TableCell>{appartement.city}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Link
                        href={`/appartements/appartement/${appartement.id}/edit`}
                        className={cn(buttonVariants())}
                      >
                        Modifier
                      </Link>
                      <Button variant="destructive">Supprimer</Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
    </div>
  );
}
