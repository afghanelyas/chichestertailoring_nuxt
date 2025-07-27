<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <section
      class="relative h-[40vh] lg:h-[70vh] min-h-[400px] bg-app-blue overflow-hidden"
    >
      <div
        class="absolute inset-0 bg-cover bg-center app-estimator opacity-90"
        aria-hidden="true"
      ></div>
      <div
        class="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/10"
        aria-hidden="true"
      ></div>
      <div
        class="container mx-auto px-4 lg:px-6 relative z-10 h-full flex flex-col justify-center"
      >
        <div class="max-w-3xl">
          <h1
            class="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
          >
            Professional Tailoring Estimate
          </h1>
          <p class="text-white text-base lg:text-lg font-light mb-6 max-w-lg">
            Upload photos and describe your needs for an accurate price estimate
          </p>
        </div>
      </div>
    </section>

    <!-- Estimator Form Section -->
    <section class="py-16 lg:py-20 bg-gray-50">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-5xl mx-auto rounded-xl p-8 bg-white shadow-sm">
          <template v-if="!estimateResult">
            <form @submit.prevent="submitEstimate">
              <!-- Image Upload -->
              <div class="mb-8">
                <label
                  for="image-upload"
                  class="block text-blue text-sm text-center font-medium mb-2"
                >
                  Upload Image of Your Garment
                </label>
                <div
                  class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-xl min-h-[200px] relative"
                  :class="{ 'border-blue bg-blue-50': isDragging }"
                  @drop.prevent="handleDrop"
                  @dragover.prevent="isDragging = true"
                  @dragleave.prevent="isDragging = false"
                >
                  <div
                    v-if="uploading"
                    class="absolute inset-0 bg-white/80 flex flex-col items-center justify-center rounded-xl z-20"
                  >
                    <div
                      class="animate-spin rounded-full h-10 w-10 border-b-2 border-blue mb-2"
                    ></div>
                    <span class="text-blue-600 font-medium"
                      >Uploading image...</span
                    >
                  </div>

                  <div
                    v-if="!image"
                    class="flex flex-col items-center justify-center cursor-pointer"
                  >
                    <input
                      id="image-upload"
                      type="file"
                      class="hidden"
                      accept="image/*"
                      @change="handleFileChange"
                    />
                    <label
                      for="image-upload"
                      class="text-center w-full h-full flex flex-col items-center justify-center"
                    >
                      <div
                        class="flex flex-col items-center justify-center p-4"
                      >
                        <Icon
                          name="heroicons:cloud-arrow-up"
                          class="w-12 h-12 text-gray-400"
                        />
                        <div
                          class="flex text-sm text-gray-600 justify-center mt-2"
                        >
                          <span
                            class="font-medium text-blue hover:text-blue-500"
                            >Click to upload</span
                          >
                          <span class="pl-1">or drag and drop</span>
                        </div>
                        <p class="text-xs text-gray-500 mt-1">
                          PNG, JPG up to 5MB
                        </p>
                      </div>
                    </label>
                  </div>

                  <div
                    v-else
                    class="relative w-full h-full flex items-center justify-center"
                  >
                    <img
                      :src="imagePreview"
                      class="max-h-60 max-w-full rounded-lg object-contain shadow-sm"
                      alt="Preview"
                    />
                    <button
                      type="button"
                      @click="removeImage"
                      class="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow-md hover:bg-gray-100"
                    >
                      <Icon
                        name="heroicons:x-mark"
                        class="w-5 h-5 text-gray-700"
                      />
                    </button>
                  </div>
                </div>
              </div>

              <!-- Service Type -->
              <fieldset class="mb-8">
                <legend
                  class="block text-blue text-center text-sm font-medium mb-3"
                >
                  Select Service Type
                </legend>
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="radio"
                      id="alteration"
                      value="alteration"
                      v-model="serviceType"
                      class="hidden peer"
                    />
                    <label
                      for="alteration"
                      class="peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:shadow-sm p-4 border-2 border-gray-200 rounded-lg cursor-pointer flex flex-col items-center justify-between"
                    >
                      <Icon
                        name="heroicons:scissors"
                        class="w-10 h-10 text-blue mb-2"
                      />
                      <div class="text-lg font-medium text-gray-900">
                        Alteration
                      </div>
                      <p class="text-xs text-gray-500 mt-1 text-center">
                        Adjustments to fit or style
                      </p>
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="dry_cleaning"
                      value="dry_cleaning"
                      v-model="serviceType"
                      class="hidden peer"
                    />
                    <label
                      for="dry_cleaning"
                      class="peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:shadow-sm p-4 border-2 border-gray-200 rounded-lg cursor-pointer flex flex-col items-center justify-between"
                    >
                      <Icon
                        name="heroicons:sparkles"
                        class="w-10 h-10 text-blue mb-2"
                      />
                      <div class="text-lg font-medium text-gray-900">
                        Dry Cleaning
                      </div>
                      <p class="text-xs text-gray-500 mt-1 text-center">
                        Professional garment care
                      </p>
                    </label>
                  </div>
                </div>
              </fieldset>

              <!-- Description -->
              <div class="mb-8">
                <label
                  for="description"
                  class="block text-blue text-center text-sm font-medium mb-2"
                >
                  {{
                    serviceType === "alteration"
                      ? "What alterations do you need?"
                      : "Any special instructions or stains?"
                  }}
                </label>
                <textarea
                  id="description"
                  v-model="description"
                  rows="4"
                  class="block w-full sm:text-sm border border-gray-300 rounded-lg p-3 shadow-sm"
                  :placeholder="
                    serviceType === 'alteration'
                      ? 'e.g., Shorten sleeves by 2 inches'
                      : 'e.g., Red wine stain on collar'
                  "
                ></textarea>
              </div>

              <!-- Submit Button -->
              <div class="mt-8">
                <button
                  type="submit"
                  class="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg text-lg font-medium text-white bg-app-blue hover:bg-blue-700"
                  :disabled="loading"
                >
                  <Icon
                    v-if="loading"
                    name="heroicons:bolt"
                    class="w-5 h-5 mr-2 animate-spin"
                  />
                  <span>{{ loading ? "Processing..." : "Get Estimate" }}</span>
                </button>
              </div>
            </form>
          </template>

          <!-- Show Result -->
          <template v-else>
            <div class="border border-app-blue rounded-xl p-6">
              <div class="text-center mb-6">
                <div
                  class="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4"
                >
                  <Icon
                    name="heroicons:check-circle"
                    class="w-8 h-8 text-blue"
                  />
                </div>
                <h3 class="text-2xl font-bold text-gray-900">
                  Your Tailoring Estimate
                </h3>
                <p class="text-gray-600 mt-1">
                  Here's our professional assessment
                </p>
              </div>

              <div class="space-y-4">
                <div class="flex justify-between items-center py-3 border-b">
                  <span class="text-gray-700">Service Type:</span>
                  <span class="font-medium text-blue">{{
                    capitalize(serviceType)
                  }}</span>
                </div>
                <div class="flex justify-between items-center py-3 border-b">
                  <span class="text-gray-700">Estimated Price:</span>
                  <span class="font-bold text-blue text-xl">{{
                    estimateResult.price
                  }}</span>
                </div>
                <div class="pt-4">
                  <h4 class="font-medium text-gray-900 mb-3 flex items-center">
                    <Icon
                      name="heroicons:document-text"
                      class="w-5 h-5 text-blue mr-2"
                    />
                    Service Details
                  </h4>
                  <div
                    class="bg-blue-50 p-4 rounded-lg text-sm whitespace-pre-wrap"
                  >
                    {{ estimateResult.details }}
                  </div>
                </div>
                <div class="pt-6">
                  <button
                    @click="resetForm"
                    class="w-full bg-app-blue text-white font-medium py-2.5 px-4 rounded-lg hover:bg-blue-700"
                  >
                    <Icon
                      name="heroicons:arrow-path"
                      class="w-5 h-5 inline-block mr-2"
                    />
                    Start New Estimate
                  </button>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useNuxtApp } from "#app";

const image = ref(null);
const imagePreview = ref("");
const isDragging = ref(false);
const uploading = ref(false);
const loading = ref(false);
const serviceType = ref("");
const description = ref("");
const estimateResult = ref(null);

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file && file.type.startsWith("image/")) {
    uploading.value = true;
    const reader = new FileReader();
    reader.onload = () => {
      imagePreview.value = reader.result;
      uploading.value = false;
    };
    reader.readAsDataURL(file);
    image.value = file;
  }
};

const handleDrop = (event) => {
  isDragging.value = false;
  const file = event.dataTransfer.files[0];
  handleFileChange({ target: { files: [file] } });
};

const removeImage = () => {
  image.value = null;
  imagePreview.value = "";
};

const submitEstimate = async () => {
  loading.value = true;
  // Replace with actual API call
  setTimeout(() => {
    estimateResult.value = {
      serviceType: serviceType.value,
      price: "$49.99",
      details: description.value || "Basic tailoring service provided.",
    };
    loading.value = false;
  }, 2000);
};

const resetForm = () => {
  image.value = null;
  imagePreview.value = "";
  serviceType.value = "";
  description.value = "";
  estimateResult.value = null;
};

const capitalize = (text) =>
  text.charAt(0).toUpperCase() + text.slice(1).replace("_", " ");
</script>
