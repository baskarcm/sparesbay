// react
import React from "react";
// third-party
import classNames from "classnames";
import { FormattedMessage } from "react-intl";
// application
import AppLink from "~/components/shared/AppLink";
import DropdownCurrency from "~/components/header/DropdownCurrency";
import DropdownLanguage from "~/components/header/DropdownLanguage";
import url from "~/services/url";
import { useCompare } from "~/store/compare/compareHooks";

type Layout = "spaceship-start" | "spaceship-end" | "classic";

interface Props {
    layout: Layout;
}

function Topbar(props: Props) {
    const { layout } = props;
    const compare = useCompare();
    const rootClasses = classNames("topbar", `topbar--${layout}`);

    return <div className={rootClasses}></div>;
}

export default Topbar;
