import { useState } from 'react';

const INITIAL_FORM_STATE = {
  fullName: '',
  phone: '',
  email: '',
  specialty: '',
  doctor: '',
  reason: '',
};

export default function AppointmentForm() {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState(null);

  const validateField = (name, value) => {
    switch (name) {
      case 'fullName': {
        const val = value.trim();
        if (!val) return 'Full name is required.';
        if (val.length < 2) return 'Name must be at least 2 characters.';
        if (!/^[a-zA-Z\s.'-]+$/.test(val)) return 'Please enter a valid name.';
        return '';
      }
      case 'phone': {
        const val = value.trim();
        if (!val) return 'Phone number is required.';
        if (!/^\d{10}$/.test(val)) return 'Please enter a valid 10-digit mobile number.';
        return '';
      }
      case 'email': {
        const val = value.trim();
        if (!val) return '';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return 'Please enter a valid email address.';
        return '';
      }
      case 'specialty': {
        if (!value) return 'Please select a preferred specialty.';
        return '';
      }
      case 'reason': {
        const val = value.trim();
        if (!val) return 'Please describe your eye concern.';
        if (val.length < 8) return 'Please provide at least 8 characters.';
        return '';
      }
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let cleanVal = value;

    if (name === 'phone') {
      cleanVal = value.replace(/\D/g, '').slice(0, 10);
    }

    setFormData((prev) => ({ ...prev, [name]: cleanVal }));

    if (touched[name]) {
      const errorMsg = validateField(name, cleanVal);
      setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const errorMsg = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const allTouched = {
      fullName: true,
      phone: true,
      email: true,
      specialty: true,
      reason: true,
    };
    setTouched(allTouched);

    const newErrors = {};
    let isValid = true;

    ['fullName', 'phone', 'email', 'specialty', 'reason'].forEach((field) => {
      const err = validateField(field, formData[field]);
      if (err) {
        newErrors[field] = err;
        isValid = false;
      }
    });

    setErrors(newErrors);

    if (!isValid) {
      const firstErrorKey = Object.keys(newErrors)[0];
      const el = document.getElementById(firstErrorKey);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.focus();
      }
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const refNum = 'MMJ-' + Math.floor(100000 + Math.random() * 900000);
      setSubmittedRef(refNum);
      setIsSubmitting(false);
    }, 1000);
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM_STATE);
    setErrors({});
    setTouched({});
    setSubmittedRef(null);
  };

  const getInputClass = (fieldName) => {
    if (!touched[fieldName]) return 'form-input';
    if (errors[fieldName]) return 'form-input error';
    if (formData[fieldName]) return 'form-input success';
    return 'form-input';
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-wrapper">
          {/* Contact Info Column */}
          <div className="contact-info reveal">
            <span className="section-eyebrow">Get In Touch</span>
            <h2 className="section-title">Request an Appointment</h2>
            <p className="section-subtitle">
              Fill in the form below and our medical coordination team will contact you within 24 hours to confirm your consultation schedule.
            </p>

            {/* Clean, Unified Medical SVG Feature Badges (No Mismatched Emojis) */}
            <div className="contact-features">
              <div className="contact-feature">
                <div className="feature-icon-badge" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className="feature-text">
                  <strong>Prompt Confirmation</strong>
                  <p>Fast response within 24 business hours</p>
                </div>
              </div>

              <div className="contact-feature">
                <div className="feature-icon-badge" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <div className="feature-text">
                  <strong>100% Confidential</strong>
                  <p>Patient privacy strictly guarded</p>
                </div>
              </div>

              <div className="contact-feature">
                <div className="feature-icon-badge" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <line x1="20" y1="8" x2="20" y2="14" />
                    <line x1="23" y1="11" x2="17" y2="11" />
                  </svg>
                </div>
                <div className="feature-text">
                  <strong>Super-Specialist Access</strong>
                  <p>20+ fellowship-trained eye surgeons</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column — Compact & Streamlined */}
          <div className="form-wrapper reveal">
            <div className="form-portal-header">
              <div className="portal-badge">
                <span className="portal-dot"></span>
                <span>Online Appointment Desk</span>
              </div>
              <p className="portal-subtext">
                Complete the details below. For urgent eye trauma, please call our 24×7 casualty directly at{' '}
                <a href="tel:+918362228222" className="portal-tel-link">0836-2228222</a>.
              </p>
            </div>

            {!submittedRef ? (
              <form className="appointment-form compact-form" id="appointmentForm" onSubmit={handleSubmit} noValidate>
                {/* Row 1: Full Name & Phone Number */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fullName" className="form-label">
                      Full Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      className={getInputClass('fullName')}
                      placeholder="Patient full name"
                      value={formData.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                    <span className="form-error" id="fullNameError">
                      {errors.fullName}
                    </span>
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Phone Number <span className="required">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className={getInputClass('phone')}
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      maxLength={10}
                    />
                    <span className="form-error" id="phoneError">
                      {errors.phone}
                    </span>
                  </div>
                </div>

                {/* Row 2: Email & Preferred Specialty */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address <span className="optional">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={getInputClass('email')}
                      placeholder="patient@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <span className="form-error" id="emailError">
                      {errors.email}
                    </span>
                  </div>

                  <div className="form-group">
                    <label htmlFor="specialty" className="form-label">
                      Preferred Specialty <span className="required">*</span>
                    </label>
                    <select
                      id="specialty"
                      name="specialty"
                      className={`form-select ${getInputClass('specialty')}`}
                      value={formData.specialty}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    >
                      <option value="">Select specialty</option>
                      <option value="cataract">Cataract (Phaco &amp; Premium IOLs)</option>
                      <option value="vitreo-retina">Vitreo-Retina &amp; Diabetic Care</option>
                      <option value="cornea">Cornea Services &amp; Transplants</option>
                      <option value="pediatric">Paediatric Ophthalmology &amp; Squint</option>
                      <option value="glaucoma">Glaucoma Diagnostics &amp; Surgery</option>
                      <option value="lasik">LASIK / Contoura Vision</option>
                      <option value="oculoplasty">Oculoplasty &amp; Eyelid Surgery</option>
                      <option value="contact-lens">Specialty Contact Lens Clinic</option>
                      <option value="general">Comprehensive Eye Check-Up</option>
                    </select>
                    <span className="form-error" id="specialtyError">
                      {errors.specialty}
                    </span>
                  </div>
                </div>

                {/* Row 3: Preferred Specialist */}
                <div className="form-group">
                  <label htmlFor="doctor" className="form-label">
                    Preferred Specialist <span className="optional">(Optional)</span>
                  </label>
                  <select
                    id="doctor"
                    name="doctor"
                    className="form-input form-select"
                    value={formData.doctor}
                    onChange={handleChange}
                  >
                    <option value="">Any available specialist</option>
                    <option value="dr-shrinivas-joshi">Dr. Srinivas Joshi (Director · Vitreoretinal Specialist)</option>
                    <option value="dr-guruprasad">Dr. Guruprasad S. Ayachit (Retina &amp; Uvea)</option>
                    <option value="dr-satyamurthy">Dr. K. V. Satyamurthy (HOD Cornea &amp; Refractive)</option>
                    <option value="dr-krishnaprasad">Dr. R. Krishnaprasad (Pediatric Ophthalmology &amp; Glaucoma)</option>
                    <option value="dr-deepti-joshi">Dr. Deepti Joshi (Pediatric Specialist)</option>
                    <option value="dr-vijayalaxmi-kori">Dr. Vijayalaxmi Kori (Glaucoma Gold Medalist)</option>
                    <option value="dr-aniket-shastri">Dr. Aniket N. Shastri (Cornea &amp; Phaco)</option>
                    <option value="dr-priyanka-rane">Dr. Priyanka Rane (Glaucoma Surgeon)</option>
                  </select>
                </div>

                {/* Row 4: Reason for Consultation */}
                <div className="form-group">
                  <label htmlFor="reason" className="form-label">
                    Reason for Consultation <span className="required">*</span>
                  </label>
                  <textarea
                    id="reason"
                    name="reason"
                    className={`form-textarea compact-textarea ${getInputClass('reason')}`}
                    placeholder="Briefly describe your vision concern or symptoms..."
                    value={formData.reason}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    rows={2}
                  ></textarea>
                  <span className="form-error" id="reasonError">
                    {errors.reason}
                  </span>
                </div>

                <div className="privacy-note compact-privacy">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                  </svg>
                  Encrypted &amp; strictly used for hospital appointment scheduling.
                </div>

                <button
                  type="submit"
                  className="btn btn-amber btn-full"
                  id="submitBtn"
                  disabled={isSubmitting}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                    <path d="M19 4H5c-1.1 0-2 .9-2 2v14l4-4h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" />
                  </svg>
                  {isSubmitting ? 'Submitting Enquiry…' : 'Submit Appointment Request'}
                </button>

                <p className="form-disclaimer-note">
                  *Demonstration prototype: In live deployment, connects securely to hospital HMIS.
                </p>
              </form>
            ) : (
              <div className="form-success" id="formSuccess" style={{ display: 'flex' }}>
                <div className="success-icon">✅</div>
                <h3>Appointment Request Received!</h3>
                <p>Thank you! Your enquiry has been registered in our appointment queue.</p>
                <div className="ref-number" id="refNumber">
                  Tracking Ref: {submittedRef}
                </div>
                <p className="success-note">
                  Our patient coordinator will contact you at <strong>{formData.phone}</strong> within 24 hours. For urgent emergencies, please call the 24×7 helpline:{' '}
                  <a href="tel:+918362228222">0836-2228222</a>.
                </p>
                <button type="button" className="btn btn-primary" onClick={handleReset}>
                  Submit Another Enquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
