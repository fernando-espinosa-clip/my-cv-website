"use client"
import { MapPin, Phone, Mail, Send } from 'lucide-react'
import { useLanguage } from "@/lib/i18n-context"
import { useState } from 'react'

export function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      message: ''
    }
    let isValid = true

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = t.contact.errors.nameRequired
      isValid = false
    } else if (formData.name.length > 150) {
      newErrors.name = t.contact.errors.nameLength
      isValid = false
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = t.contact.errors.emailRequired
      isValid = false
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = t.contact.errors.emailInvalid
      isValid = false
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = t.contact.errors.messageRequired
      isValid = false
    } else if (formData.message.length > 1000) {
      newErrors.message = t.contact.errors.messageLength
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        // Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <section id="contact" className="py-20 px-8 md:px-16 bg-[#252525]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">{t.contact.title}</h2>
        <div className="w-16 h-1 bg-primary mb-12"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">{t.contact.subtitle1}</h3>
            <p className="text-gray-400 mb-10 leading-relaxed">
              {t.contact.description}
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded bg-[#333] flex items-center justify-center text-primary mr-4 flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase mb-1">{t.contact.addressTitle}</h4>
                  <p className="text-gray-400 text-sm">Guadalajara, Mexico</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 rounded bg-[#333] flex items-center justify-center text-primary mr-4 flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase mb-1">{t.contact.phoneTitle}</h4>
                  <p className="text-gray-400 text-sm">+52 (624) 12745-05</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 rounded bg-[#333] flex items-center justify-center text-primary mr-4 flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase mb-1">{t.contact.emailTitle}</h4>
                  <p className="text-gray-400 text-sm">mail@fer.cc</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">{t.contact.subtitle2}</h3>
            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="w-full">
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.contact.namePlaceholder}
                    maxLength={150}
                    disabled={isSubmitting}
                    className={`w-full bg-[#333] border ${errors.name ? 'border-red-500' : 'border-gray-700'} text-white px-4 py-3 focus:outline-none focus:border-primary transition-colors disabled:opacity-50`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div className="w-full">
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.contact.emailPlaceholder}
                    disabled={isSubmitting}
                    className={`w-full bg-[#333] border ${errors.email ? 'border-red-500' : 'border-gray-700'} text-white px-4 py-3 focus:outline-none focus:border-primary transition-colors disabled:opacity-50`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>
              <div className="w-full">
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.contact.messagePlaceholder}
                  rows={5}
                  maxLength={1000}
                  disabled={isSubmitting}
                  className={`w-full bg-[#333] border ${errors.message ? 'border-red-500' : 'border-gray-700'} text-white px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none disabled:opacity-50`}
                ></textarea>
                <div className="flex justify-between mt-1">
                  {errors.message ? <p className="text-red-500 text-xs">{errors.message}</p> : <span></span>}
                  <p className="text-gray-500 text-xs">{formData.message.length}/1000</p>
                </div>
              </div>
              
              {submitStatus === 'success' && (
                <p className="text-green-500 text-sm">✓ {t.contact.successMessage || 'Message sent successfully!'}</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500 text-sm">✗ {t.contact.errorMessage || 'Failed to send message. Please try again.'}</p>
              )}
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="px-8 py-3 bg-transparent border-2 border-primary text-white font-bold tracking-wider hover:bg-primary transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (t.contact.sending || 'SENDING...') : t.contact.button} 
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
