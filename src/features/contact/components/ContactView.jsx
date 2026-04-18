import { CtaButton } from '../../../shared/components/CtaButton'

const inputClasses =
  'w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-text placeholder:text-text/30 focus:outline-none focus:border-accent/50 transition-colors duration-200'

const labelClasses = 'block text-xs uppercase tracking-wide text-text/50 mb-1.5'

function ContactView({
  content,
  nombre,
  setNombre,
  apellido,
  setApellido,
  whatsapp,
  setWhatsapp,
  mail,
  setMail,
  mensaje,
  setMensaje,
  selectedServices,
  toggleService,
  isLoading,
  submitted,
  error,
  handleSubmit,
}) {
  return (
    <section id="contact" className="py-24 px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">

        <div className="flex flex-col gap-4">
          <span className="font-display text-xs uppercase tracking-wide-display text-accent">
            {content.badge}
          </span>
          <h2 className="font-display font-bold leading-none tracking-tight text-5xl md:text-6xl xl:text-7xl text-text">
            {content.heading}
          </h2>
        </div>

        <div className="max-w-2xl mr-auto w-full bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm p-8 md:p-10">
          {submitted ? (
            <div className="flex flex-col items-center text-center gap-4 py-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="w-16 h-16 text-accent"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <h3 className="font-display font-bold text-2xl text-text">
                {content.successTitle}
              </h3>
              <p className="font-sans text-sm text-text/70">
                {content.successBody}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-nombre" className={labelClasses}>
                    {content.fields.nombre} <span className="text-accent">*</span>
                  </label>
                  <input
                    id="contact-nombre"
                    type="text"
                    required
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder={content.placeholders.nombre}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="contact-apellido" className={labelClasses}>
                    {content.fields.apellido} <span className="text-accent">*</span>
                  </label>
                  <input
                    id="contact-apellido"
                    type="text"
                    required
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    placeholder={content.placeholders.apellido}
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-whatsapp" className={labelClasses}>
                    {content.fields.whatsapp} <span className="text-accent">*</span>
                  </label>
                  <input
                    id="contact-whatsapp"
                    type="tel"
                    required
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder={content.placeholders.whatsapp}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="contact-mail" className={labelClasses}>
                    {content.fields.mail} <span className="text-text/30 normal-case tracking-normal">({content.optional})</span>
                  </label>
                  <input
                    id="contact-mail"
                    type="email"
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                    placeholder={content.placeholders.mail}
                    className={inputClasses}
                  />
                </div>
              </div>

              <div>
                <span className={labelClasses} id="servicios-label">
                  {content.fields.servicios} <span className="text-accent" aria-label="requerido">*</span>
                  <span className="block text-text/40 normal-case tracking-normal font-sans mt-0.5">{content.selectOne}</span>
                </span>
                <div className="flex flex-wrap gap-2 mt-1.5" role="group" aria-labelledby="servicios-label" aria-required="true">
                  {content.services.map((service) => {
                    const active = selectedServices.includes(service)
                    return (
                      <button
                        key={service}
                        type="button"
                        onClick={() => toggleService(service)}
                        aria-pressed={active}
                        className={
                          active
                            ? 'bg-accent/15 border border-accent/40 text-accent rounded-full px-4 py-1.5 text-xs font-display cursor-pointer transition-all duration-200'
                            : 'bg-white/5 border border-white/10 text-text/60 rounded-full px-4 py-1.5 text-xs font-display cursor-pointer transition-all duration-200 hover:bg-white/10'
                        }
                      >
                        {service}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div>
                <label htmlFor="contact-mensaje" className={labelClasses}>
                  {content.fields.mensaje}
                </label>
                <textarea
                  id="contact-mensaje"
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  placeholder={content.placeholders.mensaje}
                  className={`${inputClasses} resize-none h-32`}
                />
              </div>

              <div className="flex justify-end">
                <div className="w-full md:w-auto">
                  <CtaButton type="submit" disabled={isLoading} className="w-full md:w-auto">
                    {isLoading ? (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                          className="w-4 h-4 animate-spin"
                        >
                          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                        </svg>
                        {content.sending}
                      </>
                    ) : (
                      <>
                        {content.submit}
                        <span aria-hidden="true">→</span>
                      </>
                    )}
                  </CtaButton>
                </div>
              </div>

              {error && (
                <p className="font-sans text-sm text-red-400 text-center mt-2">
                  {content.errorMessage}
                </p>
              )}
            </form>
          )}
        </div>

      </div>
    </section>
  )
}

export default ContactView
