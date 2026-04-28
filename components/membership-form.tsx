"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Loader2 } from "lucide-react"

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  alternatePhone: string
  dateOfBirth: string
  gender: string
  nationalId: string
  ssiga: string
  mutuba: string
  lunyilili: string
  residence: string
  occupation: string
  employer: string
  monthlyIncome: string
  preferredGroup: string
  numberOfShares: string
  referredBy: string
  motivation: string
  agreeToTerms: boolean
}

const ssigaOptions = [
  "Ssiga Yiga",
  "Ssiga Muyomba",
  "Ssiga Mulindwa",
  "Ssiga Kalwanyi",
  "Ssiga Kasaanya",
  "Ssiga Luggwa",
  "Ssiga Mateega",
  "Other",
]

const groupOptions = [
  "Kasolya level Group",
  "Lunyiriri level Group",
  "Ssiga Level Group",
  "Mutuba Level Group",
  "Residence-based Group",
  "Not Sure Yet",
]

export function MembershipForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    alternatePhone: "",
    dateOfBirth: "",
    gender: "",
    nationalId: "",
    ssiga: "",
    mutuba: "",
    lunyilili: "",
    residence: "",
    occupation: "",
    employer: "",
    monthlyIncome: "",
    preferredGroup: "",
    numberOfShares: "1",
    referredBy: "",
    motivation: "",
    agreeToTerms: false,
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/membership", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to submit application")
      }

      setIsSubmitted(true)
    } catch {
      setError("Failed to submit your application. Please try again or contact us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="bg-card border-none shadow-xl">
        <CardContent className="p-8 text-center">
          <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-10 w-10 text-secondary" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
            Application Submitted Successfully!
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Thank you for your interest in joining Engabi Ensamba Clan SACCO.
            Our team will review your application and contact you shortly.
          </p>
          <p className="text-sm text-muted-foreground">
            For immediate assistance, call us at{" "}
            <a href="tel:+256782358125" className="text-primary hover:underline">
              +256 782 358 125
            </a>
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-card border-none shadow-xl">
      <CardHeader className="pb-4">
        <CardTitle className="font-serif text-2xl text-foreground text-center">
          Membership Application Form
        </CardTitle>
        <p className="text-muted-foreground text-center text-sm">
          Fill out all required fields to apply for membership
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 pb-2 border-b border-border">
              Personal Information
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your first name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your last name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+256 7XX XXX XXX"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="alternatePhone">Alternate Phone</Label>
                <Input
                  id="alternatePhone"
                  name="alternatePhone"
                  type="tel"
                  value={formData.alternatePhone}
                  onChange={handleChange}
                  placeholder="+256 7XX XXX XXX"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                <Input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Gender *</Label>
                <Select
                  value={formData.gender}
                  onValueChange={(value) => handleSelectChange("gender", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="nationalId">National ID Number *</Label>
                <Input
                  id="nationalId"
                  name="nationalId"
                  value={formData.nationalId}
                  onChange={handleChange}
                  required
                  placeholder="Enter your NIN"
                />
              </div>
            </div>
          </div>

          {/* Clan Information */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 pb-2 border-b border-border">
              Clan Information
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="ssiga">Ssiga (Sub-clan) *</Label>
                <Select
                  value={formData.ssiga}
                  onValueChange={(value) => handleSelectChange("ssiga", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your Ssiga" />
                  </SelectTrigger>
                  <SelectContent>
                    {ssigaOptions.map((ssiga) => (
                      <SelectItem key={ssiga} value={ssiga}>
                        {ssiga}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="mutuba">Mutuba</Label>
                <Input
                  id="mutuba"
                  name="mutuba"
                  value={formData.mutuba}
                  onChange={handleChange}
                  placeholder="Enter your Mutuba"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lunyilili">Lunyilili</Label>
                <Input
                  id="lunyilili"
                  name="lunyilili"
                  value={formData.lunyilili}
                  onChange={handleChange}
                  placeholder="Enter your Lunyilili"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="residence">Place of Residence *</Label>
                <Input
                  id="residence"
                  name="residence"
                  value={formData.residence}
                  onChange={handleChange}
                  required
                  placeholder="City, District, Country"
                />
              </div>
            </div>
          </div>

          {/* Employment Information */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 pb-2 border-b border-border">
              Employment Information
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="occupation">Occupation *</Label>
                <Input
                  id="occupation"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  required
                  placeholder="Your occupation/profession"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="employer">Employer / Business Name</Label>
                <Input
                  id="employer"
                  name="employer"
                  value={formData.employer}
                  onChange={handleChange}
                  placeholder="Company or business name"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="monthlyIncome">Estimated Monthly Income (UGX)</Label>
                <Select
                  value={formData.monthlyIncome}
                  onValueChange={(value) =>
                    handleSelectChange("monthlyIncome", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select income range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="below-500k">Below 500,000</SelectItem>
                    <SelectItem value="500k-1m">500,000 - 1,000,000</SelectItem>
                    <SelectItem value="1m-2m">1,000,000 - 2,000,000</SelectItem>
                    <SelectItem value="2m-5m">2,000,000 - 5,000,000</SelectItem>
                    <SelectItem value="above-5m">Above 5,000,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Membership Details */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 pb-2 border-b border-border">
              Membership Details
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="preferredGroup">Preferred Group Level *</Label>
                <Select
                  value={formData.preferredGroup}
                  onValueChange={(value) =>
                    handleSelectChange("preferredGroup", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select preferred group" />
                  </SelectTrigger>
                  <SelectContent>
                    {groupOptions.map((group) => (
                      <SelectItem key={group} value={group}>
                        {group}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="numberOfShares">
                  Number of Shares to Purchase (UGX 10,000 each) *
                </Label>
                <Input
                  id="numberOfShares"
                  name="numberOfShares"
                  type="number"
                  min="1"
                  value={formData.numberOfShares}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="referredBy">Referred By (Optional)</Label>
                <Input
                  id="referredBy"
                  name="referredBy"
                  value={formData.referredBy}
                  onChange={handleChange}
                  placeholder="Name of existing member who referred you"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="motivation">
                  Why do you want to join Engabi Ensamba Clan SACCO? *
                </Label>
                <Textarea
                  id="motivation"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell us your motivation for joining..."
                  className="resize-none"
                />
              </div>
            </div>
          </div>

          {/* Terms Agreement */}
          <div className="bg-muted p-4 rounded-lg">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                required
                className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
              />
              <span className="text-sm text-muted-foreground">
                I agree to the terms and by-laws of Engabi Ensamba Clan SACCO. I
                confirm that the information provided is accurate and I am a
                member of the Engabi Ensamba Clan. *
              </span>
            </label>
          </div>

          {error && (
            <div className="bg-destructive/10 text-destructive p-4 rounded-lg text-sm">
              {error}
            </div>
          )}

          <Button
            type="submit"
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            disabled={isSubmitting || !formData.agreeToTerms}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting Application...
              </>
            ) : (
              "Submit Membership Application"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
