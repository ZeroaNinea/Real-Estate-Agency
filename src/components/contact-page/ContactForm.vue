<template>
  <section class="contact-form py-5 container d-flex gap-5 justify-content-center">
    <div>
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

    <div class="contact-info">
      <h4 class="mb-4">Contact Information</h4>

      <p class="mb-2">
        <i class="bi bi-geo-alt-fill"></i>
        <span class="text-muted mx-2">123 Main Street, Kat silēz City</span>
      </p>

      <p class="mb-2">
        <i class="bi bi-telephone-fill"></i>
        <span class="text-muted mx-2">(bleh) 123-4567-890 silly_brain</span>
      </p>

      <p class="mb-2">
        <i class="bi bi-envelope-fill"></i><span class="text-muted mx-2">kat.sile@email.com</span>
      </p>

      <p class="mb-2">
        <i class="bi bi-alarm-fill"></i>
        <span class="text-muted mx-2">Monday - Friday: 9:00 AM - 5:00 PM</span>
      </p>
    </div>
  </section>
</template>
