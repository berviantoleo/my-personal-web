<template>
  <div class="card">
    <div class="card-header">
      <div class="card-header-title">
        <p class="title">
          Contact
        </p>
      </div>
    </div>
    <div class="card-content">
      <div class="columns">
        <div class="column">
          <div class="columns">
            <div class="column is-3">
              <b-image
                :src="require('@/assets/images/me.jpg')"
                alt="My Image"
                ratio="1by1"
                rounded="true"
              >
                <template #placeholder>
                  <b-skeleton
                    class="skeleton-placeholder"
                    height="100%"
                  />
                </template>
              </b-image>
            </div>
            <div class="column">
              <div class="content">
                <h3 class="title">
                  Short Bio
                </h3>
                <h5>Name</h5>
                <p>Bervianto Leo Pratama</p>
                <h5>Current Job</h5>
                <p>Backend Developer</p>
                <h5>Interest Technology / Interest Topic</h5>
                <b-taglist>
                  <b-tag
                    rounded
                    size="is-small"
                    type="is-dark"
                  >
                    Web Development
                  </b-tag>
                  <b-tag
                    rounded
                    size="is-small"
                    type="is-dark"
                  >
                    Mobile Development
                  </b-tag>
                  <b-tag
                    rounded
                    size="is-small"
                    type="is-dark"
                  >
                    Backend Development
                  </b-tag>
                  <b-tag
                    rounded
                    size="is-small"
                    type="is-dark"
                  >
                    Microservices
                  </b-tag>
                  <b-tag
                    rounded
                    size="is-small"
                    type="is-dark"
                  >
                    Cloud Computing
                  </b-tag>
                  <b-tag
                    rounded
                    size="is-small"
                    type="is-dark"
                  >
                    Cyber Security
                  </b-tag>
                </b-taglist>
                <h5>Address</h5>
                <p>
                  <b-icon
                    pack="fa"
                    icon="home"
                    size="is-small"
                  />
                  <span>Bandung</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="content">
            <h3 class="title">
              Social Media
            </h3>
            <p class="buttons are-small">
              <a
                href="mailto:bervianto.leo@gmail.com"
                class="button is-dark is-outlined"
              >
                <span class="icon">
                  <b-icon
                    pack="fa"
                    icon="envelope"
                  />
                </span>
                <span>Email</span>
              </a>
              <a
                v-for="contact in contacts"
                :key="contact.id"
                :href="contact.address"
                class="button is-dark is-outlined"
              >
                <span class="icon">
                  <b-icon
                    pack="fab"
                    :icon="contact.icon"
                  />
                </span>
                <span>{{ contact.title }}</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./About.ts"></script>
