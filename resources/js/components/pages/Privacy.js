import React from "react";
import { Parallax } from "react-parallax";
import newsfoto from "./../../assets/news-header.webp";

export default function Privacy() {
    return (
        <>
            <Parallax
                className="Privacy"
                blur={4}
                bgImage={newsfoto}
                bgImageStyle={{ opacity: ".5" }}
                strength={0}
            >
                <h1>Privacy Policy</h1>
            </Parallax>
            <div class="container" id="privacy-policy-page">
                <h1 id="privacy-policy">Privacy Policy</h1>
                <p>
                    &emsp;&emsp;&emsp;Staff Crossfire Legacy built the Crossfire Legacy
                    app as a Commercial app. This SERVICE is provided by Staff
                    Crossfire Legacy and is intended for use as is. This page is used
                    to inform visitors regarding my policies with the
                    collection, use, and disclosure of Personal Information if
                    anyone decided to use my Service. If you choose to use my
                    Service, then you agree to the collection and use of
                    information in relation to this policy. The Personal
                    Information that I collect is used for providing and
                    improving the Service. I will not use or share your
                    information with anyone except as described in this Privacy
                    Policy. The terms used in this Privacy Policy have the same
                    meanings as in our Terms and Conditions, which are
                    accessible at Crossfire Legacy unless otherwise defined in this
                    Privacy Policy.
                </p>
                <h1 id="information-collection-and-use">
                    Information Collection and Use
                </h1>
                <p>
                    &emsp;&emsp;&emsp;For a better experience, while using our
                    Service, I may require you to provide us with certain
                    personally identifiable information, including but not
                    limited to Email, IP Address, Device Version, User Agent.
                    The information that I request will be retained on your
                    device and is not collected by me in any way. The app does
                    use third-party services that may collect information used
                    to identify you. Link to the privacy policy of third-party
                    service providers used by the app
                </p>

                <p></p>
                <h1 id="log-data">Log Data</h1>
                <p>
                    &emsp;&emsp;&emsp;I want to inform you that whenever you use
                    my Service, in a case of an error in the app I collect data
                    and information (through third-party products) on your phone
                    called Log Data. This Log Data may include information such
                    as your device Internet Protocol (“IP”) address, Device
                    Version, Operating System ("OS"), the configuration of the
                    app when utilizing my Service, the time and date of your use
                    of the Service, and other statistics.
                </p>
                <h1 id="cookies">Cookies</h1>
                <p>
                    &emsp;&emsp;&emsp;Cookies are files with a small amount of
                    data that are commonly used as anonymous unique identifiers.
                    These are sent to your browser from the websites that you
                    visit and are stored on your device's internal memory. This
                    Service does not use these “cookies” explicitly. However,
                    the app may use third-party code and libraries that use
                    “cookies” to collect information and improve their services.
                    You have the option to either accept or refuse these cookies
                    and know when a cookie is being sent to your device. If you
                    choose to refuse our cookies, you may not be able to use
                    some portions of this Service.
                </p>
                <h1 id="service-providers">Service Providers</h1>
                <p>
                    &emsp;&emsp;&emsp;I may employ third-party companies and
                    individuals due to the following reasons: I want to inform
                    users of this Service that these third parties have access
                    to their Personal Information. The reason is to perform the
                    tasks assigned to them on our behalf. However, they are
                    obligated not to disclose or use the information for any
                    other purpose.
                </p>
                <h1 id="security">Security</h1>
                <p>
                    &emsp;&emsp;&emsp;I value your trust in providing us your
                    Personal Information, thus we are striving to use
                    commercially acceptable means of protecting it. But remember
                    that no method of transmission over the internet, or method
                    of electronic storage is 100% secure and reliable, and I
                    cannot guarantee its absolute security. Links to Other Sites
                    This Service may contain links to other sites. If you click
                    on a third-party link, you will be directed to that site.
                    Note that these external sites are not operated by me.
                    Therefore, I strongly advise you to review the Privacy
                    Policy of these websites. I have no control over and assume
                    no responsibility for the content, privacy policies, or
                    practices of any third-party sites or services.
                </p>
                <h1 id="children-s-privacy">Children’s Privacy</h1>
                <p>
                    &emsp;&emsp;&emsp;These Services do not address anyone under
                    the age of 13. I do not knowingly collect personally
                    identifiable information from children under 13 years of
                    age. In the case I discover that a child under 13 has
                    provided me with personal information, I immediately delete
                    this from our servers. If you are a parent or guardian and
                    you are aware that your child has provided us with personal
                    information, please contact me so that I will be able to do
                    the necessary actions. Changes to This Privacy Policy I may
                    update our Privacy Policy from time to time. Thus, you are
                    advised to review this page periodically for any changes. I
                    will notify you of any changes by posting the new Privacy
                    Policy on this page. This policy is effective as of
                    2024-02-26
                </p>
            </div>
        </>
    );
}
