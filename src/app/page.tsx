export default function Home() {
  return (
    <div className="font-sans min-h-screen p-8 pb-20 sm:p-20">
      <main className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            for Motivart
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Last Updated: [25.08.2025]
          </p>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Motivart (&ldquo;the App&rdquo;) is a platform that allows users to upload and write motivational quotes. We respect your privacy and are committed to protecting it. This Privacy Policy explains how our App handles your information.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Information We Collect
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 dark:text-gray-300 font-semibold mb-2">
                    No Personal Data Collection:
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Motivart does not collect, store, or share any personal information from its users.
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 dark:text-gray-300 font-semibold mb-2">
                    Camera and Gallery Access:
                  </p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li className="text-gray-700 dark:text-gray-300">
                      The App may request access to your device&rsquo;s camera to allow you to take photos and upload them along with your quotes.
                    </li>
                    <li className="text-gray-700 dark:text-gray-300">
                      The App may request access to your device&rsquo;s gallery so that you can select and upload images for your quotes.
                    </li>
                    <li className="text-gray-700 dark:text-gray-300">
                      These images remain on your device unless you choose to upload them.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                How We Use Permissions
              </h2>
              <ul className="list-disc ml-6 space-y-2">
                <li className="text-gray-700 dark:text-gray-300">
                  <strong>Camera:</strong> Used only for capturing photos to attach with your quotes.
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  <strong>Gallery:</strong> Used only for selecting and uploading images from your device.
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  <strong>No Background Collection:</strong> We do not access these permissions unless you choose to use them.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Data Storage & Sharing
              </h2>
              <ul className="list-disc ml-6 space-y-2">
                <li className="text-gray-700 dark:text-gray-300">
                  <strong>Local Storage:</strong> Any images or text you create are stored locally or uploaded only when you choose to publish them.
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  <strong>No Tracking or Analytics:</strong> We do not track user activity or use third-party analytics.
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  <strong>No Sharing:</strong> We do not sell, trade, or share any data with third parties.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Children&rsquo;s Privacy
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Motivart is safe for general audiences but is not specifically directed at children under 13. We do not knowingly collect data from children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Your Choices
              </h2>
              <ul className="list-disc ml-6 space-y-2">
                <li className="text-gray-700 dark:text-gray-300">
                  You can deny Camera or Gallery access; the App will still function with limited features.
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  You can uninstall the App at any time, which removes all locally stored data.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Changes to This Policy
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                We may update this Privacy Policy from time to time. Any changes will be posted here with a new &ldquo;Last Updated&rdquo; date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Contact Us
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                If you have any questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <div className="space-y-1">
                <p className="text-gray-700 dark:text-gray-300">
                  📧 [gamerranidb@@gmail.com]
                </p>
              </div>
            </section>
          </div>

          <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <p className="text-gray-700 dark:text-gray-300 text-center font-medium">
              By using Motivart, you agree to this Privacy Policy.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
