import React, { useRef, useState } from 'react';

const TermsCondition = () => {
    // Create refs for each section and the scrollable container
    const infoWeCollectRef = useRef(null);
    const howWeUseInfoRef = useRef(null);
    const dataSharingRef = useRef(null);
    const dataSecurityRef = useRef(null);
    const yourChoicesRef = useRef(null);
    const childrensPrivacyRef = useRef(null);
    const changesToPolicyRef = useRef(null);
    const refundCancellationRef = useRef(null);
    const changesToTerms = useRef(null);
    const contactUsRef = useRef(null);
    const scrollContainerRef = useRef(null); // Ref for the scrollable container

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
                Terms and <span className="text-green-500 font-poppins">Conditions</span>
            </h1>

            <p className="text-lg text-gray-600 text-center mb-10 font-poppins">
                These Terms and Conditions govern your use of the Hoping Minds e-Learning website. By accessing or using the Platform,
                you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the Platform.
            </p>

            <div className="flex flex-col lg:flex-row gap-8 relative">
                <aside className="lg:w-1/4 lg:sticky lg:top-8 h-fit">
                    <div className="p-6 shadow-none">
                        <ul className="space-y-4">
                            <li
                                className={`text-lg cursor-pointer font-poppins pl-2 border-l-4 ${activeSection === 'info' ? 'border-green-500 font-bold text-green-500' : 'border-transparent text-gray-600 hover:text-black'}`}
                                onClick={() => scrollToSection(infoWeCollectRef, 'info')}
                            >
                                Use of the Platform
                            </li>
                            <li
                                className={`text-lg cursor-pointer font-poppins pl-2 border-l-4 ${activeSection === 'how' ? 'border-green-500 font-bold text-green-500' : 'border-transparent text-gray-600 hover:text-black'}`}
                                onClick={() => scrollToSection(howWeUseInfoRef, 'how')}
                            >
                                Content
                            </li>
                            <li
                                className={`text-lg cursor-pointer font-poppins pl-2 border-l-4 ${activeSection === 'data' ? 'border-green-500 font-bold text-green-500' : 'border-transparent text-gray-600 hover:text-black'}`}
                                onClick={() => scrollToSection(dataSharingRef, 'data')}
                            >
                                Payments
                            </li>
                            <li
                                className={`text-lg cursor-pointer font-poppins pl-2 border-l-4 ${activeSection === 'security' ? 'border-green-500 font-bold text-green-500' : 'border-transparent text-gray-600 hover:text-black'}`}
                                onClick={() => scrollToSection(dataSecurityRef, 'security')}
                            >
                                Privacy
                            </li>
                            <li
                                className={`text-lg cursor-pointer font-poppins pl-2 border-l-4 ${activeSection === 'choices' ? 'border-green-500 font-bold text-green-500' : 'border-transparent text-gray-600 hover:text-black'}`}
                                onClick={() => scrollToSection(yourChoicesRef, 'choices')}
                            >
                                Disclaimer of Warranties
                            </li>
                            <li
                                className={`text-lg cursor-pointer font-poppins pl-2 border-l-4 ${activeSection === 'children' ? 'border-green-500 font-bold text-green-500' : 'border-transparent text-gray-600 hover:text-black'}`}
                                onClick={() => scrollToSection(childrensPrivacyRef, 'children')}
                            >
                                Limitation of Liability
                            </li>
                            <li
                                className={`text-lg cursor-pointer font-poppins pl-2 border-l-4 ${activeSection === 'changes' ? 'border-green-500 font-bold text-green-500' : 'border-transparent text-gray-600 hover:text-black'}`}
                                onClick={() => scrollToSection(changesToPolicyRef, 'changes')}
                            >
                                Indemnification
                            </li>
                            <li
                                className={`text-lg cursor-pointer font-poppins pl-2 border-l-4 ${activeSection === 'refund' ? 'border-green-500 font-bold text-green-500' : 'border-transparent text-gray-600 hover:text-black'}`}
                                onClick={() => scrollToSection(refundCancellationRef, 'refund')}
                            >
                                Governing Law
                            </li>
                            <li
                                className={`text-lg cursor-pointer font-poppins pl-2 border-l-4 ${activeSection === 'changesTo' ? 'border-green-500 font-bold text-green-500' : 'border-transparent text-gray-600 hover:text-black'}`}
                                onClick={() => scrollToSection(changesToTerms, 'changesTo')}
                            >
                                Changes to Terms
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
                        <h2 className="text-2xl font-bold mb-4">Use of the Platform:</h2>
                        <p className="text-gray-700 font-poppins mb-2">
                            a. License: Subject to these Terms, Hoping Minds grants you a limited, non-exclusive, non-transferable license to access and use the Platform for your personal and non-commercial use.
                        </p>
                        <p className="text-gray-700 font-poppins mb-2">
                            b. User Account: You may be required to create an account to access certain features of the Platform. You are responsible for maintaining the confidentiality of your account credentials and for any activities that occur under your account.
                        </p>
                        <p className="text-gray-700 mb-2 font-poppins">
                            You agree not to engage in any of the following prohibited activities:
                            <br />
                            Violating any applicable laws or regulations.
                            <br />
                            Interfering with or disrupting the integrity or performance of the Platform.
                            <br />
                            Attempting to gain unauthorized access to any portion of the Platform.
                            <br />
                            Uploading, posting, or transmitting any content that is unlawful, harmful, or infringes upon the rights of others.
                        </p>
                    </div>

                    {/* Section: How We Use Your Information */}
                    <div className="mb-8" ref={howWeUseInfoRef}>
                        <h2 className="text-2xl font-bold mb-4 font-poppins">Content</h2>
                        <p className="text-gray-700 mb-2 font-poppins">
                            a. Ownership: All content available on the Platform, including courses, videos, text, and graphics, is the property of Hoping Minds or its licensors and is protected by copyright and other intellectual property laws.
                        </p>
                        <p className="text-gray-700 mb-2 font-poppins">
                            b. User-Generated Content: You may have the opportunity to submit or create content on the Platform. By submitting content, you grant Hoping Minds a non-exclusive, royalty-free, perpetual, and worldwide license to use, reproduce, and distribute such content.
                        </p>
                    </div>

                    {/* Section: Data Sharing */}
                    <div className="mb-8" ref={dataSharingRef}>
                        <h2 className="text-2xl font-bold mb-4 font-poppins">Payments</h2>
                        <p className="text-gray-700 mb-2 font-poppins">
                            a. Payment Terms: If you make a purchase on the Platform, you agree to provide accurate payment information and authorize us to charge the specified amount.
                        </p>
                        <p className="text-gray-700 mb-2 font-poppins">
                            b. Refunds and Cancellations: Refunds and cancellations are subject to our refund policy, which is available on the Platform.
                        </p>
                    </div>

                    {/* Section: Data Security */}
                    <div className="mb-8" ref={dataSecurityRef}>
                        <h2 className="text-2xl font-bold mb-4 font-poppins">Privacy</h2>
                        <p className="text-gray-700 mb-2 font-poppins">
                            We take the security of your personal information seriously. We implement reasonable security measures to protect your information from unauthorized access, loss, or misuse.
                        </p>
                    </div>

                    {/* Section: Your Choices */}
                    <div className="mb-8" ref={yourChoicesRef}>
                        <h2 className="text-2xl font-bold mb-4 font-poppins">Disclaimer of Warranties</h2>
                        <p className="text-gray-700 mb-2 font-poppins">
                            The Platform is provided on an "as is" and "as available" basis. Hoping Minds makes no warranties, expressed or implied, regarding the operation of the Platform or the information, content, materials, or products included on the Platform.
                        </p>
                    </div>

                    {/* Section: Children's Privacy */}
                    <div className="mb-8" ref={childrensPrivacyRef}>
                        <h2 className="text-2xl font-bold mb-4 font-poppins">Limitation of Liability</h2>
                        <p className="text-gray-700 mb-2 font-poppins">
                            To the fullest extent permitted by applicable law, Hoping Minds shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of the Platform.
                        </p>
                    </div>

                    {/* Section: Changes to Policy */}
                    <div className="mb-8" ref={changesToPolicyRef}>
                        <h2 className="text-2xl font-bold mb-4 font-poppins">Indemnification</h2>
                        <p className="text-gray-700 mb-2 font-poppins">
                            You agree to indemnify and hold harmless Hoping Minds and its affiliates from any claims, losses, liabilities, damages, costs, or expenses arising out of your use of the Platform or violation of these Terms.
                        </p>
                    </div>

                    {/* Section: Refund and Cancellation */}
                    <div className="mb-8" ref={refundCancellationRef}>
                        <h2 className="text-2xl font-bold mb-4 font-poppins">Governing Law</h2>
                        <p className="text-gray-700 mb-2 font-poppins">
                            These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Hoping Minds operates.
                        </p>
                    </div>

                    {/* Section: Changes to Terms */}
                    <div className="mb-8" ref={changesToTerms}>
                        <h2 className="text-2xl font-bold mb-4 font-poppins">Changes to Terms</h2>
                        <p className="text-gray-700 mb-2 font-poppins">
                            We may update these Terms from time to time. Any changes will be effective immediately upon posting on the Platform, and your continued use of the Platform constitutes your acceptance of the revised Terms.
                        </p>
                    </div>

                    {/* Section: Contact Us */}
                    <div className="mb-8" ref={contactUsRef}>
                        <h2 className="text-2xl font-bold mb-4 font-poppins">Contact Us</h2>
                        <p className="text-gray-700 mb-2 font-poppins">
                            If you have any questions about these Terms, please contact us at: <a href="mailto:info@hopingminds.com" className="text-blue-500 underline">info@hopingminds.com</a>
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default TermsCondition;
