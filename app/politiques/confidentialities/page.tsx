import { SITECONFIG } from "@/src/constants/siteConfig";

export default function PagePolitiquesConfidentialites() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Politique de <span className="text-primary">Confidentialité</span>
        </h1>
        <div className="prose dark:prose-invert">
          {/* <p>Date d&lsquo;entrée en vigueur : {new Da }</p> */}
          <p>
            Bienvenue sur{" "}
            <span className="text-primary">{SITECONFIG.seo.name}</span>, le site
            de mise en relation entre bailleurs immobiliers et clients. Nous
            accordons une grande importance à la protection de vos données
            personnelles et nous nous engageons à respecter votre vie privée.
            Cette politique de confidentialité décrit comment nous collectons,
            utilisons, stockons et protégeons vos informations personnelles.
          </p>
          <h2>1. Collecte des Informations</h2>
          <p>
            Nous collectons différents types d&lsquo;informations lorsque vous
            utilisez notre site :
          </p>
          <h3>Informations fournies par les utilisateurs :</h3>
          <ul>
            <li>
              Inscription : Lors de votre inscription, nous collectons votre
              nom, adresse e-mail, numéro de téléphone, et autres informations
              pertinentes.
            </li>
            <li>
              Profil : Vous pouvez fournir des informations supplémentaires sur
              votre profil, telles que des préférences de logement, des détails
              de propriété, etc.
            </li>
            <li>
              Communication : Nous recueillons les informations que vous nous
              fournissez lors de vos communications avec nous, comme les
              messages, les demandes de renseignements, etc.
            </li>
          </ul>
          <h2>2. Utilisation des Informations</h2>
          <p>Nous utilisons les informations que nous collectons pour :</p>
          <ul>
            <li>Vous fournir nos services de mise en relation immobilière</li>
            <li>
              Vous tenir informé des mises à jour et des nouvelles
              fonctionnalités
            </li>
            <li>Améliorer et personnaliser votre expérience sur notre site</li>
            <li>Répondre à vos demandes et résoudre vos problèmes</li>
            <li>Nous conformer aux exigences légales et réglementaires</li>
          </ul>
          <h2>3. Sécurité des Données</h2>
          <p>
            Nous mettons en place des mesures de sécurité techniques et
            organisationnelles pour protéger vos données personnelles contre
            tout accès non autorisé, toute modification, divulgation ou
            destruction. Nous nous engageons à respecter la réglementation en
            vigueur en matière de protection des données.
          </p>
          <h2>4. Partage des Données avec des Tiers</h2>
          <p>
            Nous pouvons être amenés à partager vos données personnelles avec
            des tiers, comme des sous-traitants ou des partenaires, mais
            uniquement dans la mesure nécessaire à la fourniture de nos
            services. Nous nous assurons que ces tiers offrent des garanties
            suffisantes en matière de protection des données.
          </p>
          <h2>5. Droits des Utilisateurs</h2>
          <p>
            Vous disposez de plusieurs droits concernant vos données
            personnelles, notamment le droit d&lsquo;accès, de rectification, de
            suppression et de limitation du traitement. Vous pouvez également
            vous opposer au traitement de vos données dans certains cas. Pour
            exercer ces droits, vous pouvez nous contacter aux coordonnées
            indiquées ci-dessous.
          </p>
          <h2>6. Nous Contacter</h2>
          <p>
            Si vous avez des questions ou des préoccupations concernant cette
            politique de confidentialité, n&lsquo;hésitez pas à nous contacter à
            l&lsquo;adresse suivante :{" "}
            <span className="italic">babaplace09@gmail.com</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
