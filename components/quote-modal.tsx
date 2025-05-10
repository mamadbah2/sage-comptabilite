"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { sendQuoteRequest } from "@/app/actions"
import { useToast } from "@/hooks/use-toast"

interface QuoteModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function QuoteModal({ open, onOpenChange }: QuoteModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)

    try {
      await sendQuoteRequest(formData)
      toast({
        title: "Demande envoyée",
        description: "Votre demande de devis a été envoyée avec succès. Nous vous contacterons rapidement.",
        variant: "default",
      })
      onOpenChange(false)
      // Reset form
      event.currentTarget.reset()
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi de votre demande. Veuillez réessayer.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Demande de devis</DialogTitle>
          <DialogDescription>
            Remplissez ce formulaire pour recevoir un devis personnalisé pour vos besoins en comptabilité.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">Prénom *</Label>
                <Input id="firstName" name="firstName" placeholder="Votre prénom" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Nom *</Label>
                <Input id="lastName" name="lastName" placeholder="Votre nom" required />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" name="email" type="email" placeholder="votre@email.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Téléphone *</Label>
                <Input id="phone" name="phone" type="tel" placeholder="+221 77 295 20 68" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Entreprise *</Label>
              <Input id="company" name="company" placeholder="Nom de votre entreprise" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="companySize">Taille de l'entreprise *</Label>
              <Select name="companySize" defaultValue="small" required>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez la taille" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small">1-10 employés</SelectItem>
                  <SelectItem value="medium">11-50 employés</SelectItem>
                  <SelectItem value="large">Plus de 50 employés</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Service souhaité *</Label>
              <RadioGroup defaultValue="setup" name="service">
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
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="timeline">Délai souhaité</Label>
              <Select name="timeline">
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez le délai" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="urgent">Urgent (moins d'une semaine)</SelectItem>
                  <SelectItem value="soon">Rapide (1-2 semaines)</SelectItem>
                  <SelectItem value="normal">Normal (2-4 semaines)</SelectItem>
                  <SelectItem value="flexible">Flexible (plus d'un mois)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Description du projet *</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Décrivez vos besoins spécifiques, vos objectifs et toute information pertinente pour le devis..."
                className="min-h-32"
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Comment avez-vous entendu parler de nous ?</Label>
              <Select name="source">
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez une option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recommendation">Recommandation</SelectItem>
                  <SelectItem value="search">Moteur de recherche</SelectItem>
                  <SelectItem value="social">Réseaux sociaux</SelectItem>
                  <SelectItem value="advertising">Publicité</SelectItem>
                  <SelectItem value="other">Autre</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Annuler
            </Button>
            <Button type="submit" disabled={isSubmitting} className="bg-blue-600 hover:bg-blue-700">
              {isSubmitting ? "Envoi en cours..." : "Envoyer la demande"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
