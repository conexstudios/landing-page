"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { X, User, GraduationCap, Building, Phone, Mail, CheckCircle, ArrowRight, Sparkles } from "lucide-react"

interface DemoFormModalProps {
  isOpen: boolean
  onClose: () => void
  initialType?: "demo" | "trial"
}

type UserType = "parent" | "teacher" | "admin"

export function DemoFormModal({ isOpen, onClose, initialType = "demo" }: DemoFormModalProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [userType, setUserType] = useState<UserType | null>(null)
  const [formType, setFormType] = useState<"demo" | "trial">(initialType)
  const [formData, setFormData] = useState({
    // Datos básicos
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    institution: "",

    // Datos específicos por tipo de usuario
    // Para padres
    studentName: "",
    studentGrade: "",
    studentAge: "",
    parentConcerns: [] as string[],

    // Para docentes
    subject: "",
    gradesTeaching: [] as string[],
    teachingExperience: "",
    currentTools: [] as string[],
    challenges: [] as string[],

    // Para directivos
    institutionType: "",
    studentCount: "",
    budget: "",
    currentSystem: "",
    goals: [] as string[],
    timeline: "",

    // Preferencias de demo
    preferredDate: "",
    preferredTime: "",
    specificInterests: [] as string[],
    additionalComments: "",
  })

  const totalSteps = 4

  if (!isOpen) return null

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleArrayToggle = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field as keyof typeof prev].includes(value)
        ? (prev[field as keyof typeof prev] as string[]).filter((item) => item !== value)
        : [...(prev[field as keyof typeof prev] as string[]), value],
    }))
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    // Aquí se enviaría la información del formulario
    console.log("Form submitted:", { userType, formType, formData })
    // Mostrar mensaje de éxito y cerrar modal
    alert("¡Solicitud enviada exitosamente! Te contactaremos pronto.")
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#47483C] to-[#144378] p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">
                {formType === "demo" ? "Solicitar Demo Personalizada" : "Comenzar Prueba Gratuita"}
              </h2>
              <p className="text-white/80">
                {formType === "demo"
                  ? "Te mostraremos cómo ConexStudios puede transformar tu institución"
                  : "Accede a todas las funcionalidades por 30 días sin compromiso"}
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center space-x-2">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                    step <= currentStep ? "bg-white text-[#144378]" : "bg-white/20 text-white/60"
                  }`}
                >
                  {step < currentStep ? <CheckCircle className="w-4 h-4" /> : step}
                </div>
                {step < 4 && (
                  <div
                    className={`w-8 h-1 mx-2 transition-all duration-300 ${
                      step < currentStep ? "bg-white" : "bg-white/20"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          {/* Step 1: Tipo de Usuario y Formulario */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">¿Cuál es tu rol?</h3>
                <p className="text-gray-600">Esto nos ayuda a personalizar tu experiencia</p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {[
                  {
                    type: "parent" as UserType,
                    icon: User,
                    title: "Padre/Representante",
                    description: "Busco mejorar la experiencia educativa de mi hijo/a",
                    color: "[#144378]",
                  },
                  {
                    type: "teacher" as UserType,
                    icon: GraduationCap,
                    title: "Docente",
                    description: "Quiero herramientas para mejorar mi enseñanza",
                    color: "[#47483C]",
                  },
                  {
                    type: "admin" as UserType,
                    icon: Building,
                    title: "Personal Directivo",
                    description: "Necesito gestionar mi institución educativa",
                    color: "[#144378]",
                  },
                ].map((option) => (
                  <Card
                    key={option.type}
                    className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                      userType === option.type
                        ? `border-2 border-${option.color} bg-${option.color}/5`
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setUserType(option.type)}
                  >
                    <CardContent className="pt-6 text-center">
                      <div
                        className={`w-12 h-12 bg-${option.color}/10 rounded-full flex items-center justify-center mx-auto mb-4`}
                      >
                        <option.icon className={`w-6 h-6 text-${option.color}`} />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">{option.title}</h4>
                      <p className="text-sm text-gray-600">{option.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Tipo de solicitud */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">¿Qué te interesa más?</h4>
                <RadioGroup value={formType} onValueChange={(value: "demo" | "trial") => setFormType(value)}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="demo" id="demo" />
                    <Label htmlFor="demo" className="cursor-pointer">
                      <span className="font-medium">Demo Personalizada</span> - Te mostramos la plataforma en vivo
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="trial" id="trial" />
                    <Label htmlFor="trial" className="cursor-pointer">
                      <span className="font-medium">Prueba Gratuita</span> - Acceso completo por 30 días
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          )}

          {/* Step 2: Información Personal */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Información de Contacto</h3>
                <p className="text-gray-600">Necesitamos estos datos para contactarte</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">Nombre *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    placeholder="Tu nombre"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Apellido *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    placeholder="Tu apellido"
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <div className="relative mt-1">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="tu@email.com"
                      className="pl-10"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone">Teléfono *</Label>
                  <div className="relative mt-1">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+584144225188"
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="country">País/Región *</Label>
                  <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Selecciona tu país" />
                    </SelectTrigger>
                    <SelectContent>
                      {/* Genera todos los estados de Venezuela */}
                      <SelectItem value="Amazonas">Amazonas</SelectItem>
                      <SelectItem value="Anzoátegui">Anzoátegui</SelectItem>
                      <SelectItem value="Apure">Apure</SelectItem>
                      <SelectItem value="Aragua">Aragua</SelectItem>
                      <SelectItem value="Barinas">Barinas</SelectItem>
                      <SelectItem value="Bolívar">Bolívar</SelectItem>
                      <SelectItem value="Carabobo">Carabobo</SelectItem>
                      <SelectItem value="Cojedes">Cojedes</SelectItem>
                      <SelectItem value="Delta Amacuro">Delta Amacuro</SelectItem>
                      <SelectItem value="Falcón">Falcón</SelectItem>
                      <SelectItem value="Guárico">Guárico</SelectItem>
                      <SelectItem value="La Guaira">La Guaira</SelectItem>
                      <SelectItem value="Lara">Lara</SelectItem>
                      <SelectItem value="Mérida">Mérida</SelectItem>
                      <SelectItem value="Miranda">Miranda</SelectItem>
                      <SelectItem value="Monagas">Monagas</SelectItem>
                      <SelectItem value="Nueva Esparta">Nueva Esparta</SelectItem>
                      <SelectItem value="Portuguesa">Portuguesa</SelectItem>
                      <SelectItem value="Sucre">Sucre</SelectItem>
                      <SelectItem value="Táchira">Táchira</SelectItem>
                      <SelectItem value="Trujillo">Trujillo</SelectItem>
                      <SelectItem value="Yaracuy">Yaracuy</SelectItem>
                      <SelectItem value="Zulia">Zulia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="institution">Institución *</Label>
                  <div className="relative mt-1">
                    <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="institution"
                      value={formData.institution}
                      onChange={(e) => handleInputChange("institution", e.target.value)}
                      placeholder="Nombre de la institución"
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Información Específica por Tipo de Usuario */}
          {currentStep === 3 && userType === "parent" && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Información del Estudiante</h3>
                <p className="text-gray-600">Cuéntanos sobre tu hijo/a para personalizar la experiencia</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="studentName">Nombre del estudiante</Label>
                  <Input
                    id="studentName"
                    value={formData.studentName}
                    onChange={(e) => handleInputChange("studentName", e.target.value)}
                    placeholder="Nombre del estudiante"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="studentAge">Edad</Label>
                  <Input
                    id="studentAge"
                    type="number"
                    value={formData.studentAge}
                    onChange={(e) => handleInputChange("studentAge", e.target.value)}
                    placeholder="Edad"
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="studentGrade">Grado Actual</Label>
                <Select
                  value={formData.studentGrade}
                  onValueChange={(value) => handleInputChange("studentGrade", value)}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Selecciona el grado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="preescolar">Preescolar</SelectItem>
                    <SelectItem value="1">1° Primaria</SelectItem>
                    <SelectItem value="2">2° Primaria</SelectItem>
                    <SelectItem value="3">3° Primaria</SelectItem>
                    <SelectItem value="4">4° Primaria</SelectItem>
                    <SelectItem value="5">5° Primaria</SelectItem>
                    <SelectItem value="6">6° Bachillerato</SelectItem>
                    <SelectItem value="7">7° Bachillerato</SelectItem>
                    <SelectItem value="8">8° Bachillerato</SelectItem>
                    <SelectItem value="9">9° Bachillerato</SelectItem>
                    <SelectItem value="10">10° Bachillerato</SelectItem>
                    <SelectItem value="11">11° Bachillerato</SelectItem>
                    <SelectItem value="universidad">Universidad</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>¿Cuáles son tus principales preocupaciones? (Selecciona todas las que apliquen)</Label>
                <div className="grid md:grid-cols-2 gap-3 mt-2">
                  {[
                    "Rendimiento académico bajo",
                    "Falta de motivación",
                    "Dificultades de aprendizaje",
                    "Problemas de concentración",
                    "Comunicación con profesores",
                    "Seguimiento de tareas",
                    "Preparación para exámenes",
                    "Desarrollo de habilidades sociales",
                  ].map((concern) => (
                    <div key={concern} className="flex items-center space-x-2">
                      <Checkbox
                        id={concern}
                        checked={formData.parentConcerns.includes(concern)}
                        onCheckedChange={() => handleArrayToggle("parentConcerns", concern)}
                      />
                      <Label htmlFor={concern} className="text-sm cursor-pointer">
                        {concern}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && userType === "teacher" && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Información Profesional</h3>
                <p className="text-gray-600">Cuéntanos sobre tu experiencia docente</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="subject">Materia Principal</Label>
                  <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Selecciona tu materia" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="matematicas">Matemáticas</SelectItem>
                      <SelectItem value="ciencias">Ciencias Naturales</SelectItem>
                      <SelectItem value="lenguaje">Lenguaje y Literatura</SelectItem>
                      <SelectItem value="sociales">Ciencias Sociales</SelectItem>
                      <SelectItem value="ingles">Inglés</SelectItem>
                      <SelectItem value="educacion-fisica">Educación Física</SelectItem>
                      <SelectItem value="artes">Artes</SelectItem>
                      <SelectItem value="tecnologia">Tecnología</SelectItem>
                      <SelectItem value="multiple">Múltiples materias</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="teachingExperience">Años de Experiencia</Label>
                  <Select
                    value={formData.teachingExperience}
                    onValueChange={(value) => handleInputChange("teachingExperience", value)}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Años de experiencia" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-2">0-2 años</SelectItem>
                      <SelectItem value="3-5">3-5 años</SelectItem>
                      <SelectItem value="6-10">6-10 años</SelectItem>
                      <SelectItem value="11-15">11-15 años</SelectItem>
                      <SelectItem value="15+">Más de 15 años</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label>Grados que enseñas (Selecciona todos los que apliquen)</Label>
                <div className="grid grid-cols-4 gap-2 mt-2">
                  {["1°", "2°", "3°", "4°", "5°", "6°", "7°", "8°", "9°", "10°", "11°", "Universidad"].map((grade) => (
                    <div key={grade} className="flex items-center space-x-2">
                      <Checkbox
                        id={grade}
                        checked={formData.gradesTeaching.includes(grade)}
                        onCheckedChange={() => handleArrayToggle("gradesTeaching", grade)}
                      />
                      <Label htmlFor={grade} className="text-sm cursor-pointer">
                        {grade}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label>¿Cuáles son tus principales desafíos? (Selecciona todos los que apliquen)</Label>
                <div className="grid md:grid-cols-2 gap-3 mt-2">
                  {[
                    "Mantener la atención de los estudiantes",
                    "Evaluación personalizada",
                    "Seguimiento del progreso",
                    "Comunicación con padres",
                    "Gestión del tiempo",
                    "Recursos didácticos limitados",
                    "Diferencias en ritmos de aprendizaje",
                    "Tecnología en el aula",
                  ].map((challenge) => (
                    <div key={challenge} className="flex items-center space-x-2">
                      <Checkbox
                        id={challenge}
                        checked={formData.challenges.includes(challenge)}
                        onCheckedChange={() => handleArrayToggle("challenges", challenge)}
                      />
                      <Label htmlFor={challenge} className="text-sm cursor-pointer">
                        {challenge}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && userType === "admin" && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Información Institucional</h3>
                <p className="text-gray-600">Cuéntanos sobre tu institución</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="institutionType">Tipo de Institución</Label>
                  <Select
                    value={formData.institutionType}
                    onValueChange={(value) => handleInputChange("institutionType", value)}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Selecciona el tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="colegio-privado">Colegio Privado</SelectItem>
                      <SelectItem value="colegio-publico">Colegio Público</SelectItem>
                      <SelectItem value="universidad-privada">Universidad Privada</SelectItem>
                      <SelectItem value="universidad-publica">Universidad Pública</SelectItem>
                      <SelectItem value="instituto-tecnico">Instituto Técnico</SelectItem>
                      <SelectItem value="centro-capacitacion">Centro de Capacitación</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="studentCount">Número de Estudiantes</Label>
                  <Select
                    value={formData.studentCount}
                    onValueChange={(value) => handleInputChange("studentCount", value)}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Cantidad de estudiantes" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-100">1-100 estudiantes</SelectItem>
                      <SelectItem value="101-500">101-500 estudiantes</SelectItem>
                      <SelectItem value="501-1000">501-1,000 estudiantes</SelectItem>
                      <SelectItem value="1001-2500">1,001-2,500 estudiantes</SelectItem>
                      <SelectItem value="2500+">Más de 2,500 estudiantes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="budget">Presupuesto Mensual Estimado</Label>
                  <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Rango de presupuesto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-50">$0 - $50 USD</SelectItem>
                      <SelectItem value="51-200">$51 - $200 USD</SelectItem>
                      <SelectItem value="201-500">$201 - $500 USD</SelectItem>
                      <SelectItem value="501-1000">$501 - $1,000 USD</SelectItem>
                      <SelectItem value="1000+">Más de $1,000 USD</SelectItem>
                      <SelectItem value="por-definir">Por definir</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="timeline">¿Cuándo planeas implementar?</Label>
                  <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Tiempo de implementación" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="inmediato">Inmediatamente</SelectItem>
                      <SelectItem value="1-3-meses">1-3 meses</SelectItem>
                      <SelectItem value="3-6-meses">3-6 meses</SelectItem>
                      <SelectItem value="6-12-meses">6-12 meses</SelectItem>
                      <SelectItem value="mas-12-meses">Más de 12 meses</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label>¿Cuáles son tus objetivos principales? (Selecciona todos los que apliquen)</Label>
                <div className="grid md:grid-cols-2 gap-3 mt-2">
                  {[
                    "Mejorar rendimiento académico",
                    "Optimizar gestión administrativa",
                    "Mejorar comunicación con padres",
                    "Reducir deserción escolar",
                    "Digitalizar procesos",
                    "Obtener mejores reportes",
                    "Facilitar trabajo remoto",
                    "Cumplir normativas educativas",
                  ].map((goal) => (
                    <div key={goal} className="flex items-center space-x-2">
                      <Checkbox
                        id={goal}
                        checked={formData.goals.includes(goal)}
                        onCheckedChange={() => handleArrayToggle("goals", goal)}
                      />
                      <Label htmlFor={goal} className="text-sm cursor-pointer">
                        {goal}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Preferencias de Demo/Trial */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {formType === "demo" ? "Preferencias para la Demo" : "Configuración de Prueba"}
                </h3>
                <p className="text-gray-600">
                  {formType === "demo"
                    ? "¿Cuándo te gustaría que te mostremos ConexStudios?"
                    : "Personaliza tu experiencia de prueba gratuita"}
                </p>
              </div>

              {formType === "demo" && (
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="preferredDate">Fecha Preferida</Label>
                    <Input
                      id="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                      className="mt-1"
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>
                  <div>
                    <Label htmlFor="preferredTime">Hora Preferida</Label>
                    <Select
                      value={formData.preferredTime}
                      onValueChange={(value) => handleInputChange("preferredTime", value)}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Selecciona la hora" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="9-11">9:00 AM - 11:00 AM</SelectItem>
                        <SelectItem value="11-13">11:00 AM - 1:00 PM</SelectItem>
                        <SelectItem value="14-16">2:00 PM - 4:00 PM</SelectItem>
                        <SelectItem value="16-18">4:00 PM - 6:00 PM</SelectItem>
                        <SelectItem value="flexible">Horario flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              <div>
                <Label>¿Qué aspectos te interesan más? (Selecciona todos los que apliquen)</Label>
                <div className="grid md:grid-cols-2 gap-3 mt-2">
                  {[
                    "Gestión de estudiantes",
                    "Evaluaciones adaptativas",
                    "Comunicación con padres",
                    "Reportes y analytics",
                    "Aulas virtuales",
                    "Herramientas de diagnóstico",
                    "Integración con otros sistemas",
                    "Seguridad y privacidad",
                  ].map((interest) => (
                    <div key={interest} className="flex items-center space-x-2">
                      <Checkbox
                        id={interest}
                        checked={formData.specificInterests.includes(interest)}
                        onCheckedChange={() => handleArrayToggle("specificInterests", interest)}
                      />
                      <Label htmlFor={interest} className="text-sm cursor-pointer">
                        {interest}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="additionalComments">Comentarios Adicionales</Label>
                <Textarea
                  id="additionalComments"
                  value={formData.additionalComments}
                  onChange={(e) => handleInputChange("additionalComments", e.target.value)}
                  placeholder="¿Hay algo específico que te gustaría que cubramos en la demo/prueba?"
                  className="mt-1"
                  rows={4}
                />
              </div>

              {/* Summary Card */}
              <div className="bg-gradient-to-r from-[#144378]/5 to-[#47483C]/5 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Resumen de tu Solicitud</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Tipo:</span>
                    <span className="ml-2 font-medium">
                      {formType === "demo" ? "Demo Personalizada" : "Prueba Gratuita"}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">Rol:</span>
                    <span className="ml-2 font-medium">
                      {userType === "parent"
                        ? "Padre/Representante"
                        : userType === "teacher"
                          ? "Docente"
                          : "Personal Directivo"}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">Institución:</span>
                    <span className="ml-2 font-medium">{formData.institution || "No especificada"}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">País:</span>
                    <span className="ml-2 font-medium">{formData.country || "No especificado"}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer with Navigation */}
        <div className="border-t border-gray-200 p-6 bg-gray-50">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">
              Paso {currentStep} de {totalSteps}
            </div>

            <div className="flex space-x-3">
              {currentStep > 1 && (
                <Button variant="outline" onClick={prevStep}>
                  Anterior
                </Button>
              )}

              {currentStep < totalSteps ? (
                <Button
                  onClick={nextStep}
                  disabled={currentStep === 1 && !userType}
                  className="bg-[#144378] hover:bg-[#144378]/90"
                >
                  Siguiente
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-[#47483C] to-[#144378] hover:from-[#47483C]/90 hover:to-[#144378]/90"
                >
                  {formType === "demo" ? "Solicitar Demo" : "Comenzar Prueba Gratuita"}
                  <CheckCircle className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
