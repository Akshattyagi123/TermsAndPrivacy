import React, { useRef, useState } from 'react';

const PrivacyPolicy = () => {
    // Create refs for each section
    const infoWeCollectRef = useRef(null);
    const howWeUseInfoRef = useRef(null);
    const dataSharingRef = useRef(null);
    const dataSecurityRef = useRef(null);
    const yourChoicesRef = useRef(null);
    const childrensPrivacyRef = useRef(null);
    const changesToPolicyRef = useRef(null);
    const refundCancellationRef = useRef(null);
    const contactUsRef = useRef(null);
    const scrollContainerRef = useRef(null);

    // State to track the active section
    const [activeSection, setActiveSection] = useState('');

    const scrollToSection = (ref, sectionName) => {
        if (ref.current && scrollContainerRef.current) {
            // Calculate the top position of the target section relative to the scrollable container
            const sectionTop = ref.current.offsetTop;
            // Scroll the container to the target section
            scrollContainerRef.current.scrollTo({
                top: sectionTop - 10, // Adjust for header height if needed
                behavior: 'smooth',
            });
            setActiveSection(sectionName);
        }
    };

    return (
        <div className="bg-gray-50 p-8 md:p-16 lg:p-24">
            {/* Main Title */}
            <h1 className="text-4xl font-bold mb-4 text-center font-poppins">
                Privacy <span className="text-green-500 font-poppins">Policy</span>
            </h1>

            <p className="text-lg text-gray-600 text-center mb-10 font-poppins">
                At Hoping Minds, we are committed to protecting the privacy and security of our users' personal information.
                This Privacy Policy outlines the types of information we collect, how we use it, and the measures we take to safeguard your data when you use our platform.
            </p>

            <div className="flex flex-col lg:flex-row gap-8 relative">

                <aside className="lg:w-1/4 lg:sticky lg:top-8 h-fit">
                    <div className="p-6 shadow-none">
                        <ul className="space-y-4">
                            <li
                                className={`text-lg cursor-pointer font-poppins pl-2 border-l-4 ${activeSection === 'info' ? 'border-green-500 font-bold text-green-500' : 'border-transparent text-gray-600 hover:text-black'}`}
                                onClick={() => scrollToSection(infoWeCollectRef, 'info')}
                            >
                                Information We Collect
                            </li>
                            <li
                                className={`text-lg cursor-pointer font-poppins pl-2 border-l-4 ${activeSection === 'how' ? 'border-green-500 font-bold text-green-500' : 'border-transparent text-gray-600 hover:text-black'}`}
                                onClick={() => scrollToSection(howWeUseInfoRef, 'how')}
                            >
                                How We Use Your Information
                            </li>
                            <li
                                className={`text-lg cursor-pointer font-poppins pl-2 border-l-4 ${activeSection === 'data' ? 'border-green-500 font-bold text-green-500' : 'border-transparent text-gray-600 hover:text-black'}`}
                                onClick={() => scrollToSection(dataSharingRef, 'data')}
                            >
                                Data Sharing and Disclosure
                            </li>
                            <li
                                className={`text-lg cursor-pointer font-poppins pl-2 border-l-4 ${activeSection === 'security' ? 'border-green-500 font-bold text-green-500' : 'border-transparent text-gray-600 hover:text-black'}`}
                                onClick={() => scrollToSection(dataSecurityRef, 'security')}
                            >
                                Data Security
                            </li>
                            <li
                                className={`text-lg cursor-pointer font-poppins pl-2 border-l-4 ${activeSection === 'choices' ? 'border-green-500 font-bold text-green-500' : 'border-transparent text-gray-600 hover:text-black'}`}
                                onClick={() => scrollToSection(yourChoicesRef, 'choices')}
                            >
                                Your Choices
                            </li>
                            <li
                                className={`text-lg cursor-pointer font-poppins pl-2 border-l-4 ${activeSection === 'children' ? 'border-green-500 font-bold text-green-500' : 'border-transparent text-gray-600 hover:text-black'}`}
                                onClick={() => scrollToSection(childrensPrivacyRef, 'children')}
                            >
                                Children's Privacy
                            </li>
                            <li
                                className={`text-lg cursor-pointer font-poppins pl-2 border-l-4 ${activeSection === 'changes' ? 'border-green-500 font-bold text-green-500' : 'border-transparent text-gray-600 hover:text-black'}`}
                                onClick={() => scrollToSection(changesToPolicyRef, 'changes')}
                            >
                                Changes to This Privacy Policy
                            </li>
                            <li
                                className={`text-lg cursor-pointer font-poppins pl-2 border-l-4 ${activeSection === 'refund' ? 'border-green-500 font-bold text-green-500' : 'border-transparent text-gray-600 hover:text-black'}`}
                                onClick={() => scrollToSection(refundCancellationRef, 'refund')}
                            >
                                Refund & Cancellation Policy
                            </li>
                            <li
                                className={`text-lg cursor-pointer font-poppins pl-2 border-l-4 ${activeSection === 'contact' ? 'border-green-500 font-bold text-green-500' : 'border-transparent text-gray-600 hover:text-black'}`}
                                onClick={() => scrollToSection(contactUsRef, 'contact')}
                            >
                                Contact Us
                            </li>
                        </ul>
                    </div>
                </aside>

                {/* Divider Line */}
                <div className="hidden lg:block w-1 h-auto bg-green-500"></div>

                {/* Main Content - Scrollable */}
                <section className="lg:w-3/4 max-h-[70vh] overflow-y-scroll no-scrollbar" ref={scrollContainerRef} style={{ '-webkit-overflow-scrolling': 'touch' }}>
                    {/* Section: Information We Collect */}
                    <div className="mb-8" ref={infoWeCollectRef}>
                        <h2 className="text-2xl font-bold mb-4">Information We Collect:</h2>
                        <p className="text-gray-700 font-poppins mb-2">
                            a. Personal Information: When you register an account with Hoping Minds, we may collect personal information such as your name, email address, and other contact details.
                        </p>
                        <p className="text-gray-700 font-poppins mb-2">
                            b. Payment Information: If you make purchases through our platform, we may collect payment information, including credit card details and billing address.
                        </p>
                        <p className="text-gray-700 mb-2 font-poppins">
                            c. User-Generated Content: Any content you create or upload to our platform, such as comments, posts, or assignments, may be collected by us.
                        </p>
                        <p className="text-gray-700 mb-2 font-poppins">
                            d. Usage Data: We automatically collect certain information about your interactions with our website, including your IP address, browser type, device information, and pages visited.
                        </p>
                    </div>

                    {/* Section: How We Use Your Information */}
                    <div className="mb-8" ref={howWeUseInfoRef}>
                        <h2 className="text-2xl font-bold mb-4 font-poppins">How We Use Your Information:</h2>
                        <p className="text-gray-700 mb-2 font-poppins">
                            a. Providing Services: We use the information we collect to provide, maintain, and improve our eLearning platform, including delivering content, processing payments, and facilitating communication between users.
                        </p>
                        <p className="text-gray-700 mb-2 font-poppins">
                            b. Personalization: We may use your information to personalize your experience on our platform, such as recommending courses or content tailored to your interests.
                        </p>
                        <p className="text-gray-700 mb-2 font-poppins">
                            c. Communication: We may use your contact information to send you important updates, announcements, or promotional offers related to our services.
                        </p>
                        <p className="text-gray-700 mb-2 font-poppins">
                            d. Analytics: We use aggregated usage data to analyze trends, monitor the effectiveness of our platform, and make informed decisions about improvements.
                        </p>
                    </div>

                    {/* Section: Data Sharing and Disclosure */}
                    <div className="mb-8" ref={dataSharingRef}>
                        <h2 className="text-2xl font-bold mb-4">Data Sharing and Disclosure:</h2>
                        <p className="text-gray-700 mb-2 font-poppins">
                            a. Third-Party Service Providers: We may share your information with third-party service providers who assist us in operating our platform, processing payments, or delivering content.
                        </p>
                        <p className="text-gray-700 mb-2 font-poppins">
                            b. Legal Compliance: We may disclose your information if required by law or in response to valid legal requests, such as subpoenas or court orders.
                        </p>
                        <p className="text-gray-700 mb-2 font-poppins">
                            c. Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred to a third party as part of the transaction.
                        </p>
                    </div>

                    {/* Section: Data Security */}
                    <div className="mb-8" ref={dataSecurityRef}>
                        <h2 className="text-2xl font-bold mb-4">Data Security:</h2>
                        <p className="text-gray-700 mb-2 font-poppins">
                            We take the security of your personal information seriously. We implement reasonable administrative, technical, and physical measures to protect your data from unauthorized access, use, or disclosure.
                        </p>
                        <p className="text-gray-700 mb-2 font-poppins">
                            However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee its absolute security.
                        </p>
                    </div>

                    {/* Section: Your Choices */}
                    <div className="mb-8" ref={yourChoicesRef}>
                        <h2 className="text-2xl font-bold mb-4">Your Choices:</h2>
                        <p className="text-gray-700 mb-2 font-poppins">
                            a. Account Settings: You may update your account information and preferences through your account settings on our platform.
                        </p>
                        <p className="text-gray-700 mb-2 font-poppins">
                            b. Opt-Out: You can opt-out of receiving promotional communications from us by following the unsubscribe instructions included in those communications.
                        </p>
                        <p className="text-gray-700 mb-2 font-poppins">
                            c. Data Access: You may request access to the personal information we hold about you, and we will respond in accordance with applicable laws.
                        </p>
                    </div>

                    {/* Section: Children's Privacy */}
                    <div className="mb-8" ref={childrensPrivacyRef}>
                        <h2 className="text-2xl font-bold mb-4">Children's Privacy:</h2>
                        <p className="text-gray-700 mb-2 font-poppins">
                            Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13 without parental consent. If you believe we have collected such information, please contact us, and we will take steps to delete it.
                        </p>
                    </div>

                    {/* Section: Changes to This Privacy Policy */}
                    <div className="mb-8" ref={changesToPolicyRef}>
                        <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy:</h2>
                        <p className="text-gray-700 mb-2 font-poppins">
                            We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any significant changes by posting the new policy on our website and updating the effective date.
                        </p>
                    </div>

                    {/* Section: Refund & Cancellation Policy */}
                    <div className="mb-8" ref={refundCancellationRef}>
                        <h2 className="text-2xl font-bold mb-4">Refund & Cancellation Policy:</h2>
                        <p className="text-gray-700 mb-2 font-poppins">
                            Our refund and cancellation policy is governed by the terms set forth at the time of purchase. Please refer to the specific terms provided during your transaction for detailed information.
                        </p>
                    </div>

                    {/* Section: Contact Us */}
                    <div className="mb-8" ref={contactUsRef}>
                        <h2 className="text-2xl font-bold mb-4">Contact Us:</h2>
                        <p className="text-gray-700 mb-2 font-poppins">
                            If you have any questions or concerns about this Privacy Policy, please contact us at [insert contact email].
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;

