"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Download, ExternalLink, Settings, Star, Sun, TrendingUp, Users, Zap } from "lucide-react"
import { useState } from "react"

export default function SolarLandingPage() {
  const [iframeUrl, setIframeUrl] = useState("https://pre-prod.monenergiecollective.fr/user-portfolio-widget?primary=ff8040&widget_user_id=0d011751-fdbe-4bb7-974b-2034f015919b")
  const [tempUrl, setTempUrl] = useState(iframeUrl)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleUrlUpdate = () => {
    setIframeUrl(tempUrl)
    setIsDialogOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sun className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold text-gray-900">SolarShare</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                Accueil
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                Solutions
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                À propos
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                Tarifs
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                Clients
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <Button dataId="connexion" variant="ghost">Connexion</Button>
              <Button dataId="demo" className="bg-orange-500 hover:bg-orange-600">Demander une démo</Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                Énergie Solaire
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Autoconsommation Collective Révolutionnaire
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Maximisez votre indépendance énergétique, réduisez vos coûts et participez à la transition écologique
                avec nos solutions photovoltaïques innovantes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button dataId="start" size="lg" className="bg-orange-500 hover:bg-orange-600">
                <Zap className="mr-2 h-5 w-5" />
                Commencer maintenant
              </Button>
              <Button dataId="demo-2" size="lg" variant="outline">
                Obtenir une démo
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Installations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">95%</div>
                <div className="text-sm text-gray-600">Satisfaction client</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">2.5M€</div>
                <div className="text-sm text-gray-600">Économies générées</div>
              </div>
            </div>
          </div>

          {/* App Download Section */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Téléchargez notre application</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                      <Download className="h-4 w-4" />
                    </div>
                    <span className="font-medium">iOS App Store</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">4.8</span>
                    <span className="text-sm text-gray-500">2.1k avis</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center">
                      <Download className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="font-medium">Google Play</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">4.7</span>
                    <span className="text-sm text-gray-500">1.8k avis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Tabs */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button dataId="connexion" variant="outline" className="bg-white">
            <Sun className="mr-2 h-4 w-4" />
            Production
          </Button>
          <Button dataId="connexion" variant="outline" className="bg-white">
            <Users className="mr-2 h-4 w-4" />
            Communauté
          </Button>
          <Button dataId="connexion" variant="outline" className="bg-white">
            <Zap className="mr-2 h-4 w-4" />
            Consommation
          </Button>
          <Button dataId="connexion" variant="outline" className="bg-white">
            <TrendingUp className="mr-2 h-4 w-4" />
            Analyses
          </Button>
        </div>

        {/* Dashboard Preview with Configurable iframe */}
        <Card className="relative overflow-hidden bg-white shadow-2xl">
          <div className="absolute top-4 right-4 z-10">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button dataId="connexion" size="sm" variant="outline" className="bg-white/90 backdrop-blur-sm">
                  <Settings className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{"Configurer l'URL de l'iframe"}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="iframe-url">{"URL à afficher"}</Label>
                    <Input
                      id="iframe-url"
                      value={tempUrl}
                      onChange={(e) => setTempUrl(e.target.value)}
                      placeholder="https://example.com"
                    />
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button dataId="connexion" variant="outline" onClick={() => setIsDialogOpen(false)}>
                      Annuler
                    </Button>
                    <Button dataId="connexion" onClick={handleUrlUpdate}>Appliquer</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <CardContent className="p-0">
            <div className="h-[600px] w-full">
              <iframe
                src={iframeUrl}
                className="w-full h-full border-0 rounded-lg"
                title="Dashboard interactif"
                loading="lazy"
              />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pourquoi choisir SolarShare ?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {"Notre plateforme révolutionne l'autoconsommation collective avec des technologies de pointe"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-white">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Sun className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Production Optimisée</h3>
              <p className="text-gray-600">
                {"Maximisez votre production solaire avec nos algorithmes d'optimisation intelligents"}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Communauté Énergétique</h3>
              <p className="text-gray-600">{"Partagez et échangez l'énergie au sein de votre communauté locale"}</p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Économies Garanties</h3>
              <p className="text-gray-600">
                {"Réduisez vos factures d'électricité jusqu'à 70% avec notre système intelligent"}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">{"Prêt à rejoindre la révolution solaire ?"}</h2>
          <p className="text-xl mb-8 opacity-90">{"Commencez votre transition énergétique dès aujourd'hui"}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button dataId="connexion" size="lg" variant="secondary">
              Demander un devis gratuit
            </Button>
            <Button dataId="connexion"
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-orange-500"
            >
              Planifier une consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sun className="h-6 w-6 text-orange-500" />
                <span className="text-lg font-bold">SolarShare</span>
              </div>
              <p className="text-gray-400">
                {"Votre partenaire pour l'autoconsommation collective et la transition énergétique."}
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Résidentiel
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Entreprises
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Collectivités
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Entreprise</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    À propos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Carrières
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Presse
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SolarShare. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
