// react
import React, { useCallback, useRef, useState } from "react";
// third-party
import classNames from "classnames";
// application
import AppLink from "~/components/shared/AppLink";
import Megamenu from "~/components/header/Megamenu";
import { ArrowRoundedDown9x6Svg, ArrowRoundedRight7x11Svg, Menu16x12Svg } from "~/svg";
import { IDepartmentsLink } from "~/interfaces/departments-link";
import { useGlobalMousedown } from "~/services/hooks";
// data
import dataHeaderDepartments from "~/data/headerDepartments";

const departments: any = [
    { title: "Audi" },
    { title: "BMW" },
    { title: "Benz" },
    { title: "Cadillac" },
    { title: "Chevrolet" },
    { title: "Ferrari" },
    { title: "Ford" },
    { title: "Honda" },
    { title: "Hyundai" },
    { title: "Isuzu" },
    { title: "Kia" },
    { title: "Land rover" },
    { title: "Lexus" },
    { title: "Maserati" },
    { title: "Mini" },
    { title: "Mitsubisi" },
    { title: "Porshe" },
    { title: "Range rover" },
    { title: "Skoda" },
    { title: "Tesla" },
    { title: "Toyota" },
    { title: "Volkswagon" },
    { title: "Volvo" },
    { title: "Beklyn" },
];

interface Props {
    label: React.ReactNode;
}

function Departments(props: Props) {
    const { label } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState<IDepartmentsLink | null>(null);
    const rootRef = useRef<HTMLDivElement>(null);

    const handleButtonClick = () => {
        setIsOpen((state) => !state);
    };

    const handleBodyMouseLeave = () => {
        setCurrentItem(null);
    };

    const handleListPaddingMouseEnter = () => {
        setCurrentItem(null);
    };

    const handleItemMouseEnter = (item: IDepartmentsLink) => {
        setCurrentItem(item);
    };

    const handleItemClick = useCallback(() => {
        setIsOpen(false);
        setCurrentItem(null);
    }, [setIsOpen, setCurrentItem]);

    useGlobalMousedown(
        (event) => {
            if (rootRef.current && !rootRef.current.contains(event.target as HTMLElement)) {
                setIsOpen(false);
            }
        },
        [setIsOpen, rootRef]
    );

    const classes = classNames("departments", {
        "departments--open": isOpen,
    });

    return (
        <div className={classes} ref={rootRef}>
            <button className="departments__button" type="button" onClick={handleButtonClick}>
                <span className="departments__button-icon">
                    <Menu16x12Svg />
                </span>
                <span className="departments__button-title">{label}</span>
                <span className="departments__button-arrow">
                    <ArrowRoundedDown9x6Svg />
                </span>
            </button>
            <div className="departments__menu">
                <div className="departments__arrow" />
                <div className="departments__body" onMouseLeave={handleBodyMouseLeave}>
                    <ul className="departments__list">
                        <li
                            className="departments__list-padding"
                            role="presentation"
                            onMouseEnter={handleListPaddingMouseEnter}
                        />
                        {/* {dataHeaderDepartments.map((item, index) => { */}
                        {departments.map((item: any, index) => {
                            const itemHasSubmenu = !!item.submenu;
                            const itemClasses = classNames("departments__item", {
                                "departments__item--has-submenu": itemHasSubmenu,
                                "departments__item--submenu--megamenu": item.submenu?.type === "megamenu",
                                "departments__item--hover": item === currentItem,
                            });

                            return (
                                <li className={itemClasses} key={index} onMouseEnter={() => handleItemMouseEnter(item)}>
                                    <AppLink
                                        className="departments__item-link"
                                        href={item.url}
                                        onClick={() => handleItemClick()}
                                        {...item.customFields?.anchorProps}
                                    >
                                        {item.title}
                                        {/* {itemHasSubmenu && (
                                            <span className="departments__item-arrow">
                                                <ArrowRoundedRight7x11Svg />
                                            </span>
                                        )} */}
                                    </AppLink>
                                </li>
                            );
                        })}
                        <li
                            className="departments__list-padding"
                            role="presentation"
                            onMouseEnter={handleListPaddingMouseEnter}
                        />
                    </ul>

                    <div className="departments__menu-container">
                        {dataHeaderDepartments.map((item, index) => {
                            if (!item.submenu) {
                                return null;
                            }

                            const itemClasses = classNames(
                                "departments__megamenu",
                                `departments__megamenu--size--${item.submenu.size}`,
                                {
                                    "departments__megamenu--open": item === currentItem,
                                }
                            );

                            return (
                                <Megamenu
                                    className={itemClasses}
                                    menu={item.submenu}
                                    key={index}
                                    onItemClick={handleItemClick}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.memo(Departments);
