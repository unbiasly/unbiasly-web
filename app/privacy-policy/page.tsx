import PageTitle from "@/components/custom/page-title";
import Link from "next/link";
import { PRIVACY_POLICY_CONSTANTS } from "@/lib/constants/privacy-policy";

export default function PrivacyPolicy() {
    const renderSection = (title: string, content: string | React.ReactNode) => (
        <>
            <h2>{title}</h2>
            {typeof content === 'string' ? <p>{content}</p> : content}
        </>
    );

    const sections = [
        {
            title: PRIVACY_POLICY_CONSTANTS.INTERPRETATION.TITLE,
            content: PRIVACY_POLICY_CONSTANTS.INTERPRETATION.CONTENT
        },
        {
            title: PRIVACY_POLICY_CONSTANTS.DEFINITIONS.TITLE,
            content: <>
                <p>{PRIVACY_POLICY_CONSTANTS.DEFINITIONS.CONTENT}</p>
                <ul>
                    {PRIVACY_POLICY_CONSTANTS.DEFINITIONS.ITEMS.map((def, index) => (
                        <li key={index}>&quot;{def.term}&quot; {def.definition}</li>
                    ))}
                </ul>
            </>
        },
        {
            title: PRIVACY_POLICY_CONSTANTS.PERSONAL_INFO.TITLE,
            content: <>
                <p>{PRIVACY_POLICY_CONSTANTS.PERSONAL_INFO.CONTENT}</p>
                <h3>{PRIVACY_POLICY_CONSTANTS.PERSONAL_INFO.DATA_TYPES.TITLE}</h3>
                <ul>
                    {PRIVACY_POLICY_CONSTANTS.PERSONAL_INFO.DATA_TYPES.ITEMS.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <p>{PRIVACY_POLICY_CONSTANTS.PERSONAL_INFO.LEGAL_BASIS}</p>
                <p>{PRIVACY_POLICY_CONSTANTS.PERSONAL_INFO.THIRD_PARTY_LINKS}</p>
            </>
        },
        {
            title: PRIVACY_POLICY_CONSTANTS.USE_OF_DATA.TITLE,
            content: <>
                <p>{PRIVACY_POLICY_CONSTANTS.USE_OF_DATA.CONTENT}</p>
                <ul>
                    {PRIVACY_POLICY_CONSTANTS.USE_OF_DATA.PURPOSES.map((purpose, index) => (
                        <li key={index}>{purpose}</li>
                    ))}
                </ul>
            </>
        },
        {
            title: PRIVACY_POLICY_CONSTANTS.SHARING_DATA.TITLE,
            content: <>
                <p>{PRIVACY_POLICY_CONSTANTS.SHARING_DATA.INTRO}</p>
                <ul>
                    {PRIVACY_POLICY_CONSTANTS.SHARING_DATA.SITUATIONS.map((situation, index) => (
                        <li key={index}>
                            <strong>{situation.title}:</strong> {situation.description}
                        </li>
                    ))}
                </ul>
                <p className="font-bold">{PRIVACY_POLICY_CONSTANTS.SHARING_DATA.DISCLAIMER}</p>
                <p>{PRIVACY_POLICY_CONSTANTS.SHARING_DATA.ENDING}</p>
            </>
        },
        {
            title: PRIVACY_POLICY_CONSTANTS.DATA_RETENTION.TITLE,
            content: <>
                <p>{PRIVACY_POLICY_CONSTANTS.DATA_RETENTION.INTRO}</p>
                {PRIVACY_POLICY_CONSTANTS.DATA_RETENTION.CONTENT.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </>
        },
        {
            title: PRIVACY_POLICY_CONSTANTS.DISCLOSURE.TITLE,
            content: <>
                <p>{PRIVACY_POLICY_CONSTANTS.DISCLOSURE.CONTENT}</p>
                <h3>{PRIVACY_POLICY_CONSTANTS.DISCLOSURE.BUSINESS_TRANSACTIONS.TITLE}</h3>
                <p>{PRIVACY_POLICY_CONSTANTS.DISCLOSURE.BUSINESS_TRANSACTIONS.CONTENT}</p>
                <p>{PRIVACY_POLICY_CONSTANTS.DISCLOSURE.LAW_ENFORCEMENT}</p>
                <h3>{PRIVACY_POLICY_CONSTANTS.DISCLOSURE.LEGAL_REQUIREMENTS.TITLE}</h3>
                <p>{PRIVACY_POLICY_CONSTANTS.DISCLOSURE.LEGAL_REQUIREMENTS.CONTENT}</p>
                <ul>
                    {PRIVACY_POLICY_CONSTANTS.DISCLOSURE.LEGAL_REQUIREMENTS.ITEMS.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </>
        },
        {
            title: PRIVACY_POLICY_CONSTANTS.SECURITY.TITLE,
            content: <>
                <p>{PRIVACY_POLICY_CONSTANTS.SECURITY.CONTENT}</p>
                {PRIVACY_POLICY_CONSTANTS.SECURITY.MEASURES.map((measure, index) => (
                    <div key={index}>
                        <h3>{measure.title}</h3>
                        <p>{measure.description}</p>
                    </div>
                ))}
                <p>{PRIVACY_POLICY_CONSTANTS.SECURITY.DISCLAIMER}</p>
            </>
        },
        {
            title: PRIVACY_POLICY_CONSTANTS.POLICY_CHANGES.TITLE,
            content: PRIVACY_POLICY_CONSTANTS.POLICY_CHANGES.CONTENT.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))
        },
        {
            title: PRIVACY_POLICY_CONSTANTS.LIABILITY_LIMITATION.TITLE,
            content: PRIVACY_POLICY_CONSTANTS.LIABILITY_LIMITATION.CONTENT.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))
        },
        {
            title: PRIVACY_POLICY_CONSTANTS.USER_RIGHTS.TITLE,
            content: <>
                <p>{PRIVACY_POLICY_CONSTANTS.USER_RIGHTS.INTRO}</p>
                <ul>
                    {PRIVACY_POLICY_CONSTANTS.USER_RIGHTS.RIGHTS.map((right, index) => (
                        <li key={index}>
                            <strong>{right.title}:</strong> {right.description}
                        </li>
                    ))}
                </ul>
            </>
        },
        {
            title: PRIVACY_POLICY_CONSTANTS.QUERIES.TITLE,
            content: <>
                <p>{PRIVACY_POLICY_CONSTANTS.QUERIES.CONTENT}</p>
                <ul>
                    {/* <li>Name: {PRIVACY_POLICY_CONSTANTS.QUERIES.CONTACT.NAME}</li> */}
                    <li>Address: {PRIVACY_POLICY_CONSTANTS.QUERIES.CONTACT.ADDRESS}</li>
                    <li>Email: <Link href={`mailto:${PRIVACY_POLICY_CONSTANTS.QUERIES.CONTACT.EMAIL}`} className="underline text-white">
                        {PRIVACY_POLICY_CONSTANTS.QUERIES.CONTACT.EMAIL}
                    </Link></li>
                </ul>
            </>
        }
    ];

    return (
        <main className="mt-[58px] padding-container max-container md:mt-[120px]">
            <div className="flex flex-col text-white py-10">
                <PageTitle>{PRIVACY_POLICY_CONSTANTS.TITLE}</PageTitle>
                <p className="mt-4">Last updated: {PRIVACY_POLICY_CONSTANTS.LAST_UPDATED}</p>
                <div className="prose prose-white prose-lg max-w-none mt-6 prose-p:text-white prose-headings:text-white prose-strong:text-white prose-li:text-white">
                    <p>{PRIVACY_POLICY_CONSTANTS.INTRODUCTION}</p>
                    {sections.map((section, index) => (
                        <div key={index} className="mt-8">
                            {renderSection(section.title, section.content)}
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
