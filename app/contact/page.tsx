import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { QuoteButton } from "@/components/quote-button"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-blue-600">
            <Link href="/" className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <line x1="9" y1="9" x2="9.01" y2="9" />
                <line x1="15" y1="9" x2="15.01" y2="9" />
              </svg>
              <span>EfficiencePrime</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/#avantages" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Avantages
            </Link>
            <Link href="/#services" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-sm font-medium text-blue-600">
              Contact
            </Link>
          </nav>
          <QuoteButton>Demander un devis</QuoteButton>
        </div>
      </header>
      <main className="flex-1">
        {/* Le reste du contenu de la page contact reste inchangé */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contactez-Nous</h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Besoin d'informations sur nos services de comptabilité logiciels comptables et financiers ? N'hésitez pas à nous contacter.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-start">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
                    <div className="relative h-40 w-40 overflow-hidden rounded-full">
                      <Image
                        src="/placeholder.svg?height=160&width=160"
                        alt="Photo de profil"
                        className="object-cover"
                        fill
                        priority
                      />
                    </div>
                    <div className="space-y-2 text-center sm:text-left">
                      <h2 className="text-2xl font-bold">Mamadou Kourouma</h2>
                      <p className="text-blue-600 font-medium">Assistant Comptable & Consultant logiciels comptables et financiers</p>
                      <div className="flex justify-center sm:justify-start space-x-4">
                        <Link href="#" className="text-gray-500 hover:text-blue-600">
                          <Linkedin className="h-5 w-5" />
                          <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link href="#" className="text-gray-500 hover:text-blue-600">
                          <Twitter className="h-5 w-5" />
                          <span className="sr-only">Twitter</span>
                        </Link>
                        <Link href="#" className="text-gray-500 hover:text-blue-600">
                          <Facebook className="h-5 w-5" />
                          <span className="sr-only">Facebook</span>
                        </Link>
                        <Link href="#" className="text-gray-500 hover:text-blue-600">
                          <Instagram className="h-5 w-5" />
                          <span className="sr-only">Instagram</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">À propos de moi</h3>
                    <p className="text-gray-500">
                      Comptable diplômé, je suis spécialisé dans
                      l'implémentation et l'optimisation de solutions logiciels comptables et financiers Comptabilité pour les PME. Mon objectif est
                      de vous aider à simplifier votre gestion financière et à prendre les meilleures décisions pour
                      votre entreprise.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Informations de contact</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Card>
                      <CardContent className="p-4 flex items-center space-x-4">
                        <Phone className="h-5 w-5 text-blue-600" />
                        <div>
                          <p className="text-sm text-gray-500">Téléphone</p>
                          <p className="font-medium">+221 77 295 20 68</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 flex items-center space-x-4">
                        <Mail className="h-5 w-5 text-blue-600" />
                        <div>
                          <p className="text-sm text-gray-500">Email</p>
                          <p className="font-medium">mamadoukourouma03@gmail.com</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 flex items-center space-x-4">
                        <Clock className="h-5 w-5 text-blue-600" />
                        <div>
                          <p className="text-sm text-gray-500">Horaires</p>
                          <p className="font-medium">Lun - Ven: 9h - 18h</p>
                          <p className="text-sm text-gray-500">Fermé le weekend</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Certifications</h3>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center justify-center h-20 w-32 bg-white rounded-lg border p-4">
                      <Image
                        src="/placeholder.svg?height=80&width=128"
                        alt="Certification logiciels comptables et financiers"
                        width={128}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex items-center justify-center h-20 w-32 bg-white rounded-lg border p-4">
                      <Image
                        src="/placeholder.svg?height=80&width=128"
                        alt="Certification Comptable"
                        width={128}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex items-center justify-center h-20 w-32 bg-white rounded-lg border p-4">
                      <Image
                        src="/placeholder.svg?height=80&width=128"
                        alt="Certification Finance"
                        width={128}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div> */}

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Disponibilité</h3>
                  <div className="flex items-center space-x-4">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Prochaines disponibilités</p>
                      <p className="text-sm text-gray-500">Généralement sous 3 jours ouvrés</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Formulaire de contact</h3>
                  <form className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">Prénom</Label>
                        <Input id="first-name" placeholder="Votre prénom" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Nom</Label>
                        <Input id="last-name" placeholder="Votre nom" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="votre@email.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input id="phone" type="tel" placeholder="+221 77 295 20 68" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Entreprise</Label>
                      <Input id="company" placeholder="Nom de votre entreprise" />
                    </div>
                    <div className="space-y-2">
                      <Label>Taille de l'entreprise</Label>
                      <RadioGroup defaultValue="small">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="small" id="small" />
                          <Label htmlFor="small">1-10 employés</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="medium" id="medium" />
                          <Label htmlFor="medium">11-50 employés</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="large" id="large" />
                          <Label htmlFor="large">Plus de 50 employés</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="space-y-2">
                      <Label>Service souhaité</Label>
                      <RadioGroup defaultValue="setup">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="setup" id="setup" />
                          <Label htmlFor="setup">Paramétrage logiciels comptables et financiers</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="training" id="training" />
                          <Label htmlFor="training">Formation</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="both" id="both" />
                          <Label htmlFor="both">Les deux</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="other" />
                          <Label htmlFor="other">Autre (préciser)</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Décrivez votre projet ou vos besoins..."
                        className="min-h-32"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Comment avez-vous entendu parler de nous ?</Label>
                      <RadioGroup defaultValue="recommendation">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="recommendation" id="recommendation" />
                          <Label htmlFor="recommendation">Recommandation</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="search" id="search" />
                          <Label htmlFor="search">Moteur de recherche</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="social" id="social" />
                          <Label htmlFor="social">Réseaux sociaux</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other-source" id="other-source" />
                          <Label htmlFor="other-source">Autre</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      Envoyer le message
                    </Button>
                  </form>
                </div>

                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">FAQ</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-medium">Combien de temps dure une formation logiciels comptables et financiers ?</h4>
                      <p className="text-sm text-gray-500">
                        La durée varie selon vos besoins, généralement entre 1 et 3 jours pour une formation complète.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Proposez-vous un suivi après l'installation ?</h4>
                      <p className="text-sm text-gray-500">
                        Oui, nous offrons un suivi de 3 mois inclus après chaque installation ou formation.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Intervenez-vous à distance ?</h4>
                      <p className="text-sm text-gray-500">
                        Oui, nous proposons des services à distance ou sur site selon vos préférences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

       {/*  <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nos clients témoignent</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Découvrez ce que nos clients disent de notre accompagnement logiciels comptables et financiers Comptabilité
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <Card className="bg-white">
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="rounded-full bg-gray-100 p-1">
                        <Image
                          src="/placeholder.svg?height=40&width=40"
                          alt="Avatar"
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <p className="font-medium">Marie Durand</p>
                        <p className="text-sm text-gray-500">Directrice Financière, ABC Solutions</p>
                      </div>
                    </div>
                    <p className="text-gray-500">
                      "La formation logiciels comptables et financiers a transformé notre gestion comptable. Notre équipe est maintenant autonome et
                      beaucoup plus efficace. Un grand merci pour votre professionnalisme !"
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="rounded-full bg-gray-100 p-1">
                        <Image
                          src="/placeholder.svg?height=40&width=40"
                          alt="Avatar"
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <p className="font-medium">Pierre Martin</p>
                        <p className="text-sm text-gray-500">Gérant, PME Consulting</p>
                      </div>
                    </div>
                    <p className="text-gray-500">
                      "Le paramétrage sur mesure de logiciels comptables et financiers nous a fait gagner un temps précieux. Tout est parfaitement
                      adapté à notre activité et nos besoins spécifiques."
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="rounded-full bg-gray-100 p-1">
                        <Image
                          src="/placeholder.svg?height=40&width=40"
                          alt="Avatar"
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <p className="font-medium">Sophie Legrand</p>
                        <p className="text-sm text-gray-500">Comptable, XYZ Industries</p>
                      </div>
                    </div>
                    <p className="text-gray-500">
                      "Un accompagnement de qualité et un suivi impeccable. Je recommande vivement ces services à toute
                      entreprise souhaitant optimiser sa gestion comptable."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section> */}
      </main>
      <footer className="w-full py-6 md:py-12 bg-gray-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-xl text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
                <span>SageExpert</span>
              </div>
              <p className="text-gray-400">
                Solutions professionnelles de comptabilité pour PME. Paramétrage, formation et accompagnement sur logiciels comptables et financiers
                Comptabilité.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Liens rapides</h3>
              <nav className="flex flex-col gap-2">
                <Link href="/#avantages" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Avantages
                </Link>
                <Link href="/#services" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Services
                </Link>
                <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Contact</h3>
              <div className="text-gray-400 space-y-2">
                <p>Email: mamadoukourouma03@gmail.com</p>
                <p>Téléphone: +221 77 295 20 68</p>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2025 logiciels comptables et financiersExpert. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
