import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, AlertCircle, Send, Loader2, ChevronDown } from 'lucide-react'

const PROJECT_TYPES = [
  'Business Website',
  'E-commerce Website',
  'Landing Page',
  'Portfolio Website',
  'Website Redesign',
  'UI/UX Design',
  'Not sure yet',
]

const BUDGET_RANGES = [
  'Under ₦150,000',
  '₦150,000 – ₦300,000',
  '₦300,000 – ₦500,000',
  '₦500,000+',
  'Let\'s discuss',
]

const EMPTY_FORM = {
  name: '',
  company: '',
  email: '',
  phone: '',
  projectType: '',
  budget: '',
  details: '',
}

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Your name is required.'
  if (!form.email.trim()) {
    errors.email = 'Your email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Enter a valid email address.'
  }
  if (!form.projectType) errors.projectType = 'Select a project type.'
  if (!form.details.trim()) errors.details = 'Tell me a little about the project.'
  return errors
}

function FieldError({ message }) {
  if (!message) return null
  return (
    <motion.p
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-1.5 text-red-400 text-xs mt-1.5"
    >
      <AlertCircle className="w-3.5 h-3.5" />
      {message}
    </motion.p>
  )
}

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (touched[name]) {
      setErrors(validate({ ...form, [name]: value }))
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched((t) => ({ ...t, [name]: true }))
    setErrors(validate(form))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate(form)
    setErrors(validationErrors)
    setTouched({ name: true, email: true, projectType: true, details: true })

    if (Object.keys(validationErrors).length > 0) return

    setStatus('submitting')
    setTimeout(() => {
      setStatus('success')
      setForm(EMPTY_FORM)
      setTouched({})
      setTimeout(() => setStatus('idle'), 6000)
    }, 1200)
  }

  const inputClass = (field) =>
    `w-full bg-white/[0.04] border ${
      errors[field] && touched[field]
        ? 'border-red-400/50 focus:border-red-400'
        : 'border-white/[0.08] focus:border-[#7c5cff]/50'
    } focus:ring-1 focus:ring-[#7c5cff]/15 text-white placeholder-white/25 rounded-xl px-4 py-3.5 text-sm outline-none transition-all duration-200`

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center text-center py-20 px-6"
      >
        <div className="w-16 h-16 rounded-full bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center mb-5">
          <CheckCircle2 className="w-8 h-8 text-emerald-400" />
        </div>
        <h3 className="text-white font-bold text-xl mb-2">Message sent.</h3>
        <p className="text-white/45 text-sm max-w-sm">
          Thanks for reaching out — I typically reply within 24 hours. I'll get
          back to you at the email you provided.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-white/50 uppercase tracking-wide mb-2">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Your full name"
            className={inputClass('name')}
            aria-invalid={!!errors.name}
          />
          <AnimatePresence>{touched.name && <FieldError message={errors.name} />}</AnimatePresence>
        </div>

        <div>
          <label htmlFor="company" className="block text-xs font-semibold text-white/50 uppercase tracking-wide mb-2">
            Company Name
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            placeholder="Your business name"
            className={inputClass('company')}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-white/50 uppercase tracking-wide mb-2">
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="you@business.com"
            className={inputClass('email')}
            aria-invalid={!!errors.email}
          />
          <AnimatePresence>{touched.email && <FieldError message={errors.email} />}</AnimatePresence>
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-white/50 uppercase tracking-wide mb-2">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+234 ..."
            className={inputClass('phone')}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="projectType" className="block text-xs font-semibold text-white/50 uppercase tracking-wide mb-2">
            Project Type *
          </label>
          <div className="relative">
            <select
              id="projectType"
              name="projectType"
              value={form.projectType}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${inputClass('projectType')} appearance-none pr-10 cursor-pointer ${form.projectType ? 'text-white' : 'text-white/40'}`}
              aria-invalid={!!errors.projectType}
            >
              <option value="" className="bg-[#0d0e14] text-white/40">
                Select a project type...
              </option>
              {PROJECT_TYPES.map((t) => (
                <option key={t} value={t} className="bg-[#0d0e14] text-white">
                  {t}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none" />
          </div>
          <AnimatePresence>{touched.projectType && <FieldError message={errors.projectType} />}</AnimatePresence>
        </div>

        <div>
          <label htmlFor="budget" className="block text-xs font-semibold text-white/50 uppercase tracking-wide mb-2">
            Budget Range
          </label>
          <div className="relative">
            <select
              id="budget"
              name="budget"
              value={form.budget}
              onChange={handleChange}
              className={`${inputClass('budget')} appearance-none pr-10 cursor-pointer ${form.budget ? 'text-white' : 'text-white/40'}`}
            >
              <option value="" className="bg-[#0d0e14] text-white/40">
                Select a budget range...
              </option>
              {BUDGET_RANGES.map((b) => (
                <option key={b} value={b} className="bg-[#0d0e14] text-white">
                  {b}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none" />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="details" className="block text-xs font-semibold text-white/50 uppercase tracking-wide mb-2">
          Project Details *
        </label>
        <textarea
          id="details"
          name="details"
          rows={5}
          value={form.details}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Tell me about what you're trying to build — goals, timeline, anything that helps me understand the project..."
          className={`${inputClass('details')} resize-none`}
          aria-invalid={!!errors.details}
        />
        <AnimatePresence>{touched.details && <FieldError message={errors.details} />}</AnimatePresence>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="flex items-center justify-center gap-2 bg-[#7c5cff] hover:bg-[#6c4cef] disabled:opacity-60 text-white font-semibold py-4 rounded-xl transition-all duration-200 shadow-lg shadow-[#7c5cff]/25 hover:shadow-[#7c5cff]/40 hover:-translate-y-0.5 text-sm"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </button>
    </form>
  )
}
