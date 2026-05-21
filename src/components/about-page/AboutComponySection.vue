<template>
  <section class="about-company py-5">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <!-- Section Heading -->
        <div class="text-center mb-5">
          <span class="badge bg-primary-subtle text-primary px-3 py-2 mb-3"> About Us </span>

          <h1 class="display-5 fw-bold mb-3">Building Dreams, One Home at a Time</h1>

          <p class="lead text-muted mx-auto description">
            DreamHome Realty is a fictional real estate agency created as part of a portfolio
            project to demonstrate modern web development skills using Vue.js, TypeScript, and
            Bootstrap.
          </p>
        </div>

        <!-- Main Card -->
        <div class="card border-0 shadow-sm rounded-4 overflow-hidden">
          <div class="card-body p-4 p-md-5">
            <div class="row g-4 align-items-center">
              <!-- Text Content -->
              <div class="col-lg-8">
                <h2 class="h3 fw-semibold mb-3">Our Mission</h2>

                <p class="text-muted mb-4">
                  We help clients discover exceptional properties in the most desirable locations.
                  Whether searching for a modern apartment, a family home, or a luxury villa, our
                  dedicated team is committed to making every step of the buying process simple and
                  enjoyable.
                </p>

                <p class="text-muted mb-0">
                  This website is a fictional portfolio project created for demonstration purposes
                  only. All properties, team members, and contact information are entirely
                  fictitious. All the assets received from the
                  <a href="https://static.photos/">https://static.photos/</a> website are used for
                  demonstration purposes.
                </p>
              </div>

              <!-- Statistics -->
              <div class="col-lg-4">
                <div class="stats-grid">
                  <div class="stat-card">
                    <div class="stat-number">500+</div>
                    <div class="stat-label">Properties Listed</div>
                  </div>

                  <div class="stat-card">
                    <div class="stat-number">98%</div>
                    <div class="stat-label">Client Satisfaction</div>
                  </div>

                  <div class="stat-card">
                    <div class="stat-number">15+</div>
                    <div class="stat-label">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Optional Values Section -->
        <div class="row g-4 mt-4">
          <div
            class="col-md-4"
            v-reveal="{
              direction: 'left',
              delay: 1 * 100,
            }"
          >
            <div class="value-card h-100">
              <h3 class="h5 fw-semibold mb-2">Trust</h3>
              <p class="text-muted mb-0">
                We prioritize honesty, transparency, and reliable guidance.
              </p>
            </div>
          </div>

          <div
            class="col-md-4"
            v-reveal="{
              direction: 'bottom',
              delay: 2 * 100,
            }"
          >
            <div class="value-card h-100">
              <h3 class="h5 fw-semibold mb-2">Expertise</h3>
              <p class="text-muted mb-0">
                Our experienced agents understand every aspect of the market.
              </p>
            </div>
          </div>

          <div
            class="col-md-4"
            v-reveal="{
              direction: 'right',
              delay: 3 * 100,
            }"
          >
            <div class="value-card h-100">
              <h3 class="h5 fw-semibold mb-2">Commitment</h3>
              <p class="text-muted mb-0">
                We work tirelessly to help clients find their perfect home.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.description {
  max-width: 720px;
}

.stats-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.stat-card {
  background: var(--bs-light);
  border-radius: 1rem;
  padding: 1.25rem;
  text-align: center;
}

.stat-number {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--bs-primary);
  line-height: 1.1;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--bs-secondary-color);
  margin-top: 0.25rem;
}

.value-card {
  background: var(--bs-light);
  border-radius: 1rem;
  padding: 1.5rem;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.value-card:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transform: translateY(-5px);
}
</style>
