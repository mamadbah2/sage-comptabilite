import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, Clock, FileText, LineChart, PieChart, Settings, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { QuoteButton } from "@/components/quote-button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="w-full px-4 md:px-6 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-blue-600">
            <Image
              src="/logo.jpg"
              alt="EfficiencePrime Logo"
              width={40}
              height={40}
              className="h-12 w-12 object-contain"
            />
            <span>EfficiencePrime</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#avantages" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Avantages
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>
          <QuoteButton>Demander un devis</QuoteButton>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50">
          <div className="w-full px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-wide sm:text-4xl md:text-5xl">
                    Solutions Logiciels Comptables Et Financiers Pour Votre PME
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Gagnez du temps, soyez plus efficace et maîtrisez vos finances avec un outil puissant et un
                    accompagnement professionnel.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#services" passHref>
                    <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-11 px-8 text-base">
                      Découvrir nos services
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </button>
                  </Link>
                  <Link href="/contact" passHref>
                    <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 text-base">
                      Nous contacter
                    </button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto lg:mr-0">
                <Image
                  alt="Dashboard comptable"
                  className="rounded-lg object-cover shadow-lg"
                  height={400}
                  src="/finimg.jpg?height=400&width=600"
                  width={600}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="avantages" className="w-full py-12 md:py-24 lg:py-32">
          <div className="w-full px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">
                  Avantages
                </div>
                <h2 className="text-3xl font-bold tracking-wide sm:text-4xl md:text-5xl">
                  Pourquoi Choisir Logiciels Comptables Et Financiers Pour Votre PME ?
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Une solution complète pour optimiser la gestion financière de votre entreprise
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Settings className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-xl">Automatisation de la comptabilité</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Enregistrement rapide et précis des écritures comptables pour gagner du temps et réduire les
                    erreurs.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Clock className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-xl">Suivi en temps réel</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Visualisez vos flux financiers à tout moment pour une meilleure gestion de votre trésorerie.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <FileText className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-xl">Gestion simplifiée</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Gain de temps sur les opérations quotidiennes grâce à la gestion simplifiée des factures et
                    paiements.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <LineChart className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-xl">Rapports financiers clairs</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Édition de rapports financiers clairs : bilan, compte de résultat, journaux, et plus encore.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <PieChart className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-xl">Conformité fiscale</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Respect des normes comptables et facilitation des déclarations pour une conformité totale.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Users className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-xl">Aide à la décision</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Tableaux de bord personnalisés pour mieux piloter l'entreprise et prendre des décisions éclairées.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="w-full px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">
                  Services
                </div>
                <h2 className="text-3xl font-bold tracking-wide sm:text-4xl md:text-5xl">
                  Nos Services Pour Votre Entreprise
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Un accompagnement complet pour tirer le meilleur parti des logiciels comptables et financiers
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-12">
              <div className="relative overflow-hidden rounded-lg border bg-white p-6 shadow-lg">
                <div className="flex flex-col space-y-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                    <Settings className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold">Paramétrage complet de logiciels comptables et financiers</h3>
                  <ul className="space-y-2 text-gray-500">
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-5 w-5 text-blue-600" />
                      <span>Intégration des données financières spécifiques à votre PME</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-5 w-5 text-blue-600" />
                      <span>Mise en place des plans comptables, journaux, comptes bancaires, etc.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-5 w-5 text-blue-600" />
                      <span>Configuration des modèles de documents et des workflows</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-5 w-5 text-blue-600" />
                      <span>Personnalisation selon vos besoins spécifiques</span>
                    </li>
                  </ul>
                </div>
                <div className="absolute right-0 top-0 h-16 w-16 bg-blue-600/10" />
              </div>
              <div className="relative overflow-hidden rounded-lg border bg-white p-6 shadow-lg">
                <div className="flex flex-col space-y-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold">Formation du personnel</h3>
                  <ul className="space-y-2 text-gray-500">
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-5 w-5 text-blue-600" />
                      <span>Formation pratique à l'utilisation du logiciel</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-5 w-5 text-blue-600" />
                      <span>Suivi et accompagnement dans la prise en main</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-5 w-5 text-blue-600" />
                      <span>Ateliers pratiques sur vos cas d'usage réels</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-5 w-5 text-blue-600" />
                      <span>Support continu et résolution des problèmes</span>
                    </li>
                  </ul>
                </div>
                <div className="absolute right-0 top-0 h-16 w-16 bg-blue-600/10" />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-wide sm:text-4xl md:text-5xl">
                    Prêt à Optimiser La Gestion De Votre PME ?
                  </h2>
                  <p className="max-w-[600px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Gagnez du temps, soyez plus efficace et maîtrisez vos finances avec un outil puissant et un
                    accompagnement professionnel.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <QuoteButton size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                    Demander un devis gratuit
                  </QuoteButton>
                </div>
              </div>
              <div className="mx-auto lg:mr-0">
                <Image
                  alt="Équipe de comptabilité"
                  className="rounded-lg object-cover shadow-lg"
                  height={400}
                  src="/pme.png?height=400&width=600"
                  width={600}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer id="contact" className="w-full py-6 md:py-12 bg-gray-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-xl text-blue-400">
                <Image
                  src="/logo.jpg"
                  alt="EfficiencePrime Logo"
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain"
                />
                <span>EfficiencePrime</span>
              </div>
              <p className="text-gray-400">
                Solutions professionnelles de comptabilité pour PME. Paramétrage, formation et accompagnement sur logiciels comptables et financiers.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Liens rapides</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#avantages" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Avantages
                </Link>
                <Link href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">
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
            <p>© 2025 EfficiencePrime. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
