import PageTitle from "@/components/custom/page-title";
import Link from "next/link";
import { TERMS_CONDITIONS_CONSTANTS } from "@/lib/constants/terms-and-conditions";

export default function TermsAndConditions() {
    // Helper function to render HTML content safely
    const renderHtml = (content: string) => {
        return <span dangerouslySetInnerHTML={{ __html: content }} />;
    };

    // Helper function to render sections with title and content
    const renderSection = (title: string, content: string | React.ReactNode) => (
        <>
            <h2>{title}</h2>
            {typeof content === 'string' ? <p>{renderHtml(content)}</p> : content}
        </>
    );

    // Helper function to render lists
    const renderList = (items: any[]) => (
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    {typeof item === 'string' 
                        ? renderHtml(item) 
                        : 'term' in item && item.term
                            ? <>&quot;{item.term}&quot; {renderHtml(item.definition)}</>
                            : 'title' in item && item.title
                                ? <><strong>{item.title}:</strong> {renderHtml(item.description)}</>
                                : item}
                </li>
            ))}
        </ul>
    );

    const sections = [
        {
            title: TERMS_CONDITIONS_CONSTANTS.INTRODUCTION.TITLE,
            content: TERMS_CONDITIONS_CONSTANTS.INTRODUCTION.CONTENT
        },
        {
            title: TERMS_CONDITIONS_CONSTANTS.INTERPRETATION.TITLE,
            content: TERMS_CONDITIONS_CONSTANTS.INTERPRETATION.CONTENT
        },
        {
            title: TERMS_CONDITIONS_CONSTANTS.DEFINITIONS.TITLE,
            content: <>
                <p>{TERMS_CONDITIONS_CONSTANTS.DEFINITIONS.CONTENT}</p>
                {renderList(TERMS_CONDITIONS_CONSTANTS.DEFINITIONS.ITEMS)}
            </>
        },
        {
            title: TERMS_CONDITIONS_CONSTANTS.ACKNOWLEDGEMENT.TITLE,
            content: <>
                <p>{TERMS_CONDITIONS_CONSTANTS.ACKNOWLEDGEMENT.CONTENT}</p>
                {TERMS_CONDITIONS_CONSTANTS.ACKNOWLEDGEMENT.ACCEPTANCE.map((text, i) => (
                    <p key={i}>{text}</p>
                ))}
                <h3>{TERMS_CONDITIONS_CONSTANTS.ACKNOWLEDGEMENT.ELIGIBILITY.TITLE}</h3>
                {renderList(TERMS_CONDITIONS_CONSTANTS.ACKNOWLEDGEMENT.ELIGIBILITY.ITEMS)}
                <p>{renderHtml(TERMS_CONDITIONS_CONSTANTS.ACKNOWLEDGEMENT.ENDING)}</p>
            </>
        },
        {
            title: TERMS_CONDITIONS_CONSTANTS.USER_ACCOUNTS.TITLE,
            content: <>
                {TERMS_CONDITIONS_CONSTANTS.USER_ACCOUNTS.CONTENT.map((text, i) => (
                    <p key={i}>{text}</p>
                ))}
                <p>{TERMS_CONDITIONS_CONSTANTS.USER_ACCOUNTS.USERNAME_GUIDELINES.CONTENT}</p>
                {renderList(TERMS_CONDITIONS_CONSTANTS.USER_ACCOUNTS.USERNAME_GUIDELINES.ITEMS)}
                <p>{TERMS_CONDITIONS_CONSTANTS.USER_ACCOUNTS.USERNAME_GUIDELINES.ENDING}</p>
            </>
        },
        {
            title: TERMS_CONDITIONS_CONSTANTS.RIGHT_TO_USE.TITLE,
            content: <>
                <p>{TERMS_CONDITIONS_CONSTANTS.RIGHT_TO_USE.INSTALLATION.CONTENT}</p>
                <h3>{TERMS_CONDITIONS_CONSTANTS.RIGHT_TO_USE.COMPLIANCE.TITLE}</h3>
                {renderList(TERMS_CONDITIONS_CONSTANTS.RIGHT_TO_USE.COMPLIANCE.ITEMS)}
                {TERMS_CONDITIONS_CONSTANTS.RIGHT_TO_USE.LICENSE.CONTENT.map((text, i) => (
                    <p key={i}>{text}</p>
                ))}
                <h3>{TERMS_CONDITIONS_CONSTANTS.RIGHT_TO_USE.WARRANTIES.TITLE}</h3>
                {renderList(TERMS_CONDITIONS_CONSTANTS.RIGHT_TO_USE.WARRANTIES.ITEMS)}
            </>
        },
        {
            title: TERMS_CONDITIONS_CONSTANTS.CONTENT_RESTRICTIONS.TITLE,
            content: <>
                <h3>{TERMS_CONDITIONS_CONSTANTS.CONTENT_RESTRICTIONS.APP_FUNCTIONALITY.TITLE}</h3>
                <p>{TERMS_CONDITIONS_CONSTANTS.CONTENT_RESTRICTIONS.APP_FUNCTIONALITY.DESCRIPTION}</p>
                <h3>{TERMS_CONDITIONS_CONSTANTS.CONTENT_RESTRICTIONS.THIRD_PARTY_CONTENT.TITLE}</h3>
                <p>{TERMS_CONDITIONS_CONSTANTS.CONTENT_RESTRICTIONS.THIRD_PARTY_CONTENT.DESCRIPTION}</p>
                <h3>{TERMS_CONDITIONS_CONSTANTS.CONTENT_RESTRICTIONS.LEAVING_APP.TITLE}</h3>
                <p>{TERMS_CONDITIONS_CONSTANTS.CONTENT_RESTRICTIONS.LEAVING_APP.DESCRIPTION}</p>
                <h3>{TERMS_CONDITIONS_CONSTANTS.CONTENT_RESTRICTIONS.APP_AS_INTERMEDIARY.TITLE}</h3>
                <p>{TERMS_CONDITIONS_CONSTANTS.CONTENT_RESTRICTIONS.APP_AS_INTERMEDIARY.DESCRIPTION}</p>
                <h3>{TERMS_CONDITIONS_CONSTANTS.CONTENT_RESTRICTIONS.USER_RESPONSIBILITY.TITLE}</h3>
                <p>{TERMS_CONDITIONS_CONSTANTS.CONTENT_RESTRICTIONS.USER_RESPONSIBILITY.DESCRIPTION}</p>
                <h3>{TERMS_CONDITIONS_CONSTANTS.CONTENT_RESTRICTIONS.PROHIBITED_CONTENT.TITLE}</h3>
                <p>{TERMS_CONDITIONS_CONSTANTS.CONTENT_RESTRICTIONS.PROHIBITED_CONTENT.DESCRIPTION}</p>
            </>
        },
        {
            title: TERMS_CONDITIONS_CONSTANTS.CONTENT_UNLAWFUL.TITLE,
            content: renderList(TERMS_CONDITIONS_CONSTANTS.CONTENT_UNLAWFUL.ITEMS)
        },
        {
            title: TERMS_CONDITIONS_CONSTANTS.CONTENT_MANAGEMENT.TITLE,
            content: <>
                <p>{TERMS_CONDITIONS_CONSTANTS.CONTENT_MANAGEMENT.CONTENT}</p>
                <p>{TERMS_CONDITIONS_CONSTANTS.CONTENT_MANAGEMENT.DISCLAIMER}</p>
            </>
        },
        {
            title: TERMS_CONDITIONS_CONSTANTS.CONTENT_BACKUPS.TITLE,
            content: <>
                <p>{TERMS_CONDITIONS_CONSTANTS.CONTENT_BACKUPS.CONTENT}</p>
                <p>{TERMS_CONDITIONS_CONSTANTS.CONTENT_BACKUPS.SUPPORT}</p>
                <p>{TERMS_CONDITIONS_CONSTANTS.CONTENT_BACKUPS.DISCLAIMER}</p>
                <p>{TERMS_CONDITIONS_CONSTANTS.CONTENT_BACKUPS.RECOMMENDATION}</p>
            </>
        },
        {
            title: TERMS_CONDITIONS_CONSTANTS.COPYRIGHT_POLICY.TITLE,
            content: <>
                <h3>{TERMS_CONDITIONS_CONSTANTS.COPYRIGHT_POLICY.INTELLECTUAL_PROPERTY.TITLE}</h3>
                <p>{TERMS_CONDITIONS_CONSTANTS.COPYRIGHT_POLICY.INTELLECTUAL_PROPERTY.CONTENT}</p>
                <p>{TERMS_CONDITIONS_CONSTANTS.COPYRIGHT_POLICY.INTELLECTUAL_PROPERTY.PROCESS}</p>
                <h4>{TERMS_CONDITIONS_CONSTANTS.COPYRIGHT_POLICY.INTELLECTUAL_PROPERTY.NOTICE.TITLE}</h4>
                <p>{TERMS_CONDITIONS_CONSTANTS.COPYRIGHT_POLICY.INTELLECTUAL_PROPERTY.NOTICE.CONTENT}</p>
                <p>{TERMS_CONDITIONS_CONSTANTS.COPYRIGHT_POLICY.INTELLECTUAL_PROPERTY.NOTICE.WARNING}</p>
            </>
        },
        {
            title: TERMS_CONDITIONS_CONSTANTS.INTELLECTUAL_PROPERTY.TITLE,
            content: <>
                <p>{TERMS_CONDITIONS_CONSTANTS.INTELLECTUAL_PROPERTY.CONTENT}</p>
                <p>{TERMS_CONDITIONS_CONSTANTS.INTELLECTUAL_PROPERTY.TRADEMARK_USAGE}</p>
            </>
        },
        {
            title: TERMS_CONDITIONS_CONSTANTS.FEEDBACK.TITLE,
            content: TERMS_CONDITIONS_CONSTANTS.FEEDBACK.CONTENT
        },
        {
            title: TERMS_CONDITIONS_CONSTANTS.THIRD_PARTY_LINKS.TITLE,
            content: <>
                <p>{TERMS_CONDITIONS_CONSTANTS.THIRD_PARTY_LINKS.CONTENT}</p>
                <p>{TERMS_CONDITIONS_CONSTANTS.THIRD_PARTY_LINKS.DISCLAIMER}</p>
                <p>{TERMS_CONDITIONS_CONSTANTS.THIRD_PARTY_LINKS.RECOMMENDATION}</p>
            </>
        },
        {
            title: TERMS_CONDITIONS_CONSTANTS.TERMINATION.TITLE,
            content: <>
                <p>{TERMS_CONDITIONS_CONSTANTS.TERMINATION.COMPANY_RIGHTS}</p>
                <p>{TERMS_CONDITIONS_CONSTANTS.TERMINATION.USER_RIGHTS}</p>
                <p>{TERMS_CONDITIONS_CONSTANTS.TERMINATION.EFFECT}</p>
            </>
        },
        {
            title: TERMS_CONDITIONS_CONSTANTS.LIABILITY_LIMITATION.TITLE,
            content: <>
                <p>{TERMS_CONDITIONS_CONSTANTS.LIABILITY_LIMITATION.CONTENT}</p>
                <p>{TERMS_CONDITIONS_CONSTANTS.LIABILITY_LIMITATION.DISCLAIMER}</p>
                <p>{TERMS_CONDITIONS_CONSTANTS.LIABILITY_LIMITATION.JURISDICTION_NOTE}</p>
            </>
        },
        {
            title: TERMS_CONDITIONS_CONSTANTS.DISCLAIMER.TITLE,
            content: <>
                {TERMS_CONDITIONS_CONSTANTS.DISCLAIMER.CONTENT.map((text, i) => (
                    <p key={i}>{text}</p>
                ))}
                <h3>{TERMS_CONDITIONS_CONSTANTS.DISCLAIMER.ITEMS.HEADING}</h3>
                {renderList(TERMS_CONDITIONS_CONSTANTS.DISCLAIMER.ITEMS.LIST)}
                <p>{TERMS_CONDITIONS_CONSTANTS.DISCLAIMER.ENDING}</p>
            </>
        },
        {
            title: TERMS_CONDITIONS_CONSTANTS.GOVERNING_LAW.TITLE,
            content: <>
                <p>{TERMS_CONDITIONS_CONSTANTS.GOVERNING_LAW.CONTENT}</p>
                {renderList(TERMS_CONDITIONS_CONSTANTS.GOVERNING_LAW.APPLICABLE_LAWS)}
                <p>{TERMS_CONDITIONS_CONSTANTS.GOVERNING_LAW.JURISDICTION}</p>
            </>
        },
        {
            title: TERMS_CONDITIONS_CONSTANTS.DISPUTES_RESOLUTION.TITLE,
            content: <>
                <p>{TERMS_CONDITIONS_CONSTANTS.DISPUTES_RESOLUTION.CONTENT}</p>
                <h3>{TERMS_CONDITIONS_CONSTANTS.DISPUTES_RESOLUTION.SEVERABILITY.TITLE}</h3>
                <p>{TERMS_CONDITIONS_CONSTANTS.DISPUTES_RESOLUTION.SEVERABILITY.CONTENT}</p>
                <h3>{TERMS_CONDITIONS_CONSTANTS.DISPUTES_RESOLUTION.WAIVER.TITLE}</h3>
                <p>{TERMS_CONDITIONS_CONSTANTS.DISPUTES_RESOLUTION.WAIVER.CONTENT}</p>
            </>
        },
        {
            title: TERMS_CONDITIONS_CONSTANTS.CHANGES.TITLE,
            content: TERMS_CONDITIONS_CONSTANTS.CHANGES.CONTENT
        },
        {
            title: TERMS_CONDITIONS_CONSTANTS.ENTIRE_AGREEMENT.TITLE,
            content: TERMS_CONDITIONS_CONSTANTS.ENTIRE_AGREEMENT.CONTENT
        },
        {
            title: TERMS_CONDITIONS_CONSTANTS.GRIEVANCE.TITLE,
            content: <>
                <p>{TERMS_CONDITIONS_CONSTANTS.GRIEVANCE.CONTENT}</p>
                <p>Email: <Link href={`mailto:${TERMS_CONDITIONS_CONSTANTS.GRIEVANCE.EMAIL}`} className="underline text-white">
                    {TERMS_CONDITIONS_CONSTANTS.GRIEVANCE.EMAIL}
                </Link></p>
            </>
        }
    ];

    return (
        <main className="mt-[58px] padding-container max-container md:mt-[120px]">
            <div className="flex flex-col text-white py-10">
                <PageTitle>{TERMS_CONDITIONS_CONSTANTS.TITLE}</PageTitle>
                <div className="prose [&_a]:text-white [&_a]:font-bold prose-white prose-lg max-w-none mt-6 prose-p:text-white prose-headings:text-white prose-strong:text-white prose-li:text-white">
                    {sections.map((section, index) => (
                        <div key={index}>
                            {renderSection(section.title, section.content)}
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
