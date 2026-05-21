<template>
  <section
    class="contact-form py-5 container d-flex flex-column flex-lg-row gap-5 justify-content-center"
  >
    <div class="request-info card border-0 shadow-sm p-4">
      <h4 class="mb-4">Request Information</h4>
      <form>
        <div class="mb-3 d-flex gap-3">
          <input type="text" class="form-control" placeholder="Your Name" />
          <input type="text" class="form-control" placeholder="Phone Number" />
        </div>

        <div class="mb-3">
          <input type="email" class="form-control" placeholder="Email Address" />
        </div>

        <div class="mb-3">
          <textarea
            class="form-control"
            rows="4"
            placeholder="I have a question to the company."
          ></textarea>
        </div>

        <button
          type="submit"
          v-ripple="'color-mix(in oklab, var(--bs-blue) 75%, var(--bs-white) 15%, transparent)'"
          class="btn btn-primary w-100"
        >
          Send Request
        </button>
      </form>
    </div>

    <div class="contact-info card border-0 shadow-sm p-4">
      <h4 class="mb-4">Contact Information</h4>

      <div class="contact-item d-flex align-items-center mb-3 gap-2">
        <i class="bi bi-geo-alt-fill"></i>
        <div>
          <strong>Address</strong>
          <div class="text-muted">123 Main Street, Kat silēz City</div>
        </div>
      </div>

      <div class="contact-item d-flex align-items-center mb-3 gap-2">
        <i class="bi bi-telephone-fill"></i>
        <div>
          <strong>Phone</strong>
          <div class="text-muted">(bleh) 123-4567-890 silly_brain</div>
        </div>
      </div>

      <div class="contact-item d-flex align-items-center mb-3 gap-2">
        <i class="bi bi-envelope-fill"></i>
        <div>
          <strong>Email</strong>
          <div class="text-muted">kat.sile@email.com</div>
        </div>
      </div>

      <div class="contact-item d-flex align-items-center mb-3 gap-2">
        <i class="bi bi-alarm-fill"></i>
        <div>
          <strong>Hours</strong>
          <div class="text-muted">Monday - Friday: 9:00 AM - 5:00 PM</div>
        </div>
      </div>
    </div>
  </section>
</template>
