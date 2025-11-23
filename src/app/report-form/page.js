"use client";
import { useState } from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function ReportForm() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [reportType, setReportType] = useState("");

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setSelectedImages([...selectedImages, ...imageUrls]);
  };

  const removeImage = (index) => {
    setSelectedImages(selectedImages.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <div className="bg-green-500 p-4 flex items-center gap-3 sticky top-0 z-40">
        <Link href="/report">
          <button className="text-white text-2xl">←</button>
        </Link>
        <h1 className="text-white text-lg font-bold flex-1 text-center">
          Report Incident
        </h1>
        <div className="w-8"></div>
      </div>

      <main className="p-6 max-w-md mx-auto">
        <form className="space-y-6">
          {/* Report Type */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Report Type *
            </label>
            <select
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
              required
              className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select type...</option>
              <option value="illegal-logging">Illegal Logging</option>
              <option value="deforestation">Deforestation</option>
              <option value="wildfire">Wildfire</option>
              <option value="wildlife-abuse">Wildlife Abuse</option>
              <option value="pollution">Pollution</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Image Upload Section */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Upload Photos/Videos *
            </label>

            {/* Upload Buttons */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              {/* Take Photo Button */}
              <label className="cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handleImageUpload}
                  className="hidden"
                  multiple
                />
                <div className="bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex flex-col items-center justify-center gap-2">
                  <span className="text-3xl">📸</span>
                  <span className="text-sm">Take Photo</span>
                </div>
              </label>

              {/* Upload from Gallery Button */}
              <label className="cursor-pointer">
                <input
                  type="file"
                  accept="image/*,video/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  multiple
                />
                <div className="bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex flex-col items-center justify-center gap-2">
                  <span className="text-3xl">🖼️</span>
                  <span className="text-sm">Upload File</span>
                </div>
              </label>
            </div>

            {/* Image Preview Grid */}
            {selectedImages.length > 0 && (
              <div className="grid grid-cols-3 gap-2 mb-3">
                {selectedImages.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={image}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-24 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}

            <p className="text-xs text-gray-500 mt-2">
              You can upload multiple photos or videos (Max 10 files, 50MB each)
            </p>
          </div>

          {/* Location Information */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Location Information
            </h3>

            <div className="space-y-3">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Location/Address *
                </label>
                <input
                  type="text"
                  placeholder="e.g., Stanley Park, Vancouver"
                  required
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    placeholder="Vancouver"
                    required
                    className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Province *
                  </label>
                  <input
                    type="text"
                    placeholder="BC"
                    required
                    className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  GPS Coordinates (Optional)
                </label>
                <input
                  type="text"
                  placeholder="49.2827° N, 123.1207° W"
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <button
                type="button"
                className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors flex items-center justify-center gap-2"
              >
                <span>📍</span>
                Use Current Location
              </button>
            </div>
          </div>

          {/* Date and Time */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              When Did This Occur?
            </h3>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Date *
                </label>
                <input
                  type="date"
                  required
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Time *
                </label>
                <input
                  type="time"
                  required
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
          </div>

          {/* Incident Details */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Incident Details
            </h3>

            <div className="space-y-3">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Subject/Title *
                </label>
                <input
                  type="text"
                  placeholder="Brief title of the incident"
                  required
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Description *
                </label>
                <textarea
                  placeholder="Provide detailed information about what you witnessed..."
                  rows="5"
                  required
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                ></textarea>
                <p className="text-xs text-gray-500 mt-1">
                  Include details like: What happened? How severe is it? Are
                  there any immediate dangers?
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Estimated Affected Area (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g., 10 hectares, 50 trees"
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Urgency Level *
                </label>
                <select
                  required
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select urgency...</option>
                  <option value="low">
                    Low - Can wait for regular inspection
                  </option>
                  <option value="medium">
                    Medium - Should be addressed soon
                  </option>
                  <option value="high">High - Needs immediate attention</option>
                  <option value="critical">
                    Critical - Emergency response needed
                  </option>
                </select>
              </div>
            </div>
          </div>

          {/* Your Contact Information */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Your Contact Information
            </h3>

            <div className="space-y-3">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="john.doe@example.com"
                  required
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  placeholder="(555) 123-4567"
                  required
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="anonymous"
                  className="mt-1 w-4 h-4 text-green-600 rounded focus:ring-green-500"
                />
                <label htmlFor="anonymous" className="text-sm text-gray-600">
                  I wish to remain anonymous (Your contact will only be visible
                  to authorities)
                </label>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Additional Information (Optional)
            </label>
            <textarea
              placeholder="Any other relevant information..."
              rows="3"
              className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
            ></textarea>
          </div>

          {/* Terms */}
          <div className="flex items-start gap-2 pt-2">
            <input
              type="checkbox"
              id="terms"
              required
              className="mt-1 w-4 h-4 text-green-600 rounded focus:ring-green-500"
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I confirm that the information provided is accurate to the best of
              my knowledge and understand that false reports may have legal
              consequences
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors"
          >
            Submit Report
          </button>
        </form>

        {/* Help Text */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-xs text-blue-800">
            <strong>📞 Emergency?</strong> For immediate danger, call 911 first.
            This report will be forwarded to the appropriate environmental
            authorities.
          </p>
        </div>
      </main>

      <Navigation />
    </div>
  );
}
