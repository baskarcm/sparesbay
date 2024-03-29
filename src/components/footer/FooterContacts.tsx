// react
import React, { FunctionComponent } from "react";
// third-party
import { FormattedMessage } from "react-intl";
// data
import theme from "~/data/theme";

const FooterContacts: FunctionComponent<React.HTMLAttributes<HTMLElement>> = () => (
    <div className="footer-contacts">
        <h5 className="footer-contacts__title">
            <FormattedMessage id="HEADER_CONTACT_US" />
        </h5>

        <div className="footer-contacts__text">
            <FormattedMessage id="TEXT_CONTACT_US_MESSAGE" />
        </div>

        <address className="footer-contacts__contacts">
            <dl>
                <dt>
                    <FormattedMessage id="TEXT_PHONE_NUMBER" />
                </dt>
                {theme.contacts.phone.map((item, index) => (
                    <dd key={index}>{item}</dd>
                ))}
            </dl>
            <dl>
                <dt>
                    <FormattedMessage id="TEXT_EMAIL_ADDRESS" />
                </dt>
                {/* {theme.contacts.email.map((item, index) => (
                    <dd key={index}>{item}</dd>
                ))} */}
                {theme.contacts.email.map((item, index) => (
                    <dd key={index}>sales@sparesbay.com</dd>
                ))}
            </dl>
        </address>
    </div>
);

export default FooterContacts;
