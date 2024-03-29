// react
import React from "react";
// third-party
import { FormattedMessage } from "react-intl";
// application
import AppLink from "~/components/shared/AppLink";
import url from "~/services/url";
import LOGO from "../../../public/images/LOGO.png";
import Image from "next/legacy/image";

interface Props extends React.HTMLAttributes<HTMLElement> {}

function Logo(props: Props) {
    return (
        <div {...props}>
            <AppLink href={url.home()} className="logo">
                <div className="logo__slogan">
                    <FormattedMessage id="TEXT_SLOGAN" />
                </div>
                <div className="logo__image">
                    <Image
                        src={LOGO}
                        alt="logo"
                        className="newLogo mt-1"
                        id="myImage"
                        style={{ minHeight: "95%", minWidth: "95%" }}
                    />
                    {/* logo */}
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="168" height="26">
                        <path
                            className="logo__part-primary"
                            d="M50,26h-5c-1.1,0-2-0.9-2-2V2c0-1.1,0.9-2,2-2h5c6.6,0,12,5.4,12,12v2C62,20.6,56.6,26,50,26z M57,12
c0-3.9-3.1-7-7-7h-0.8C48.5,5,48,5.5,48,6.2v13.6c0,0.7,0.5,1.2,1.2,1.2H50c3.9,0,7-3.1,7-7V12z M38.5,26h-13h-2
c-0.8,0-1.5-0.7-1.5-1.5v-2v-9v-2v-8v-2C22,0.7,22.7,0,23.5,0h2h13C39.3,0,40,0.7,40,1.5v2C40,4.3,39.3,5,38.5,5H27v5h9.5
c0.8,0,1.5,0.7,1.5,1.5v2c0,0.8-0.7,1.5-1.5,1.5H27v6h11.5c0.8,0,1.5,0.7,1.5,1.5v2C40,25.3,39.3,26,38.5,26z M18.8,23.8
c0.6,1-0.1,2.3-1.3,2.3h-2.3c-0.5,0-1-0.3-1.3-0.8L9.7,18H5v6.5C5,25.3,4.3,26,3.5,26h-2C0.7,26,0,25.3,0,24.5v-23
C0,0.7,0.7,0,1.5,0H10c5,0,9,4,9,9c0,3.2-1.7,6.1-4.3,7.7L18.8,23.8z M10,5H6C5.5,5,5,5.4,5,6v6c0,0.6,0.4,1,1,1h4c2.2,0,4-1.8,4-4
S12.2,5,10,5z"
                        />
                        <path
                            className="logo__part-secondary"
                            d="M166.5,8h-2.3c-0.6,0-1.1-0.4-1.4-1c-0.5-1.2-2-2-3.8-2c-2.2,0-4,1.3-4,3c0,0.9,0.6,1.8,1.5,2.3
c0.2,0.1,0.5,0.3,0.7,0.4c0.9,0.3,1.2,1.3,0.7,2.1l-1,1.7c-0.4,0.7-1.2,0.9-1.9,0.6c-1.2-0.5-2.3-1.3-3.1-2.2c-1.2-1.4-2-3.1-2-5
c0-4.4,4-8,9-8c4.3,0,8,2.6,8.9,6.2C168.2,7.1,167.4,8,166.5,8z M151.5,18h2.3c0.6,0,1.1,0.4,1.4,1c0.5,1.2,2,2,3.8,2
c2.2,0,4-1.3,4-3c0-0.9-0.6-1.8-1.5-2.3c-0.2-0.1-0.5-0.3-0.7-0.4c-0.9-0.3-1.2-1.3-0.7-2.1l1-1.7c0.4-0.6,1.2-0.9,1.9-0.6
c1.2,0.5,2.3,1.3,3.1,2.2c1.2,1.4,2,3.1,2,5c0,4.4-4,8-9,8c-4.3,0-8-2.6-8.9-6.2C149.8,18.9,150.6,18,151.5,18z M146.5,5H140v19.5
c0,0.8-0.7,1.5-1.5,1.5h-2c-0.8,0-1.5-0.7-1.5-1.5V5h-6.5c-0.8,0-1.5-0.7-1.5-1.5v-2c0-0.8,0.7-1.5,1.5-1.5h18
c0.8,0,1.5,0.7,1.5,1.5v2C148,4.3,147.3,5,146.5,5z M125.8,23.8c0.6,1-0.2,2.3-1.3,2.3h-2.3c-0.5,0-1-0.3-1.3-0.8l-4.2-7.3H112v6.5
c0,0.8-0.7,1.5-1.5,1.5h-2c-0.8,0-1.5-0.7-1.5-1.5v-23c0-0.8,0.7-1.5,1.5-1.5h8.5c5,0,9,4,9,9c0,3.2-1.7,6.1-4.3,7.7L125.8,23.8z
M117,5h-4c-0.5,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h4c2.2,0,4-1.8,4-4S119.2,5,117,5z M103.8,26h-2.3c-0.7,0-1.4-0.4-1.6-1.1l-2.4-6.7
c0-0.1-0.1-0.1-0.2-0.1h-7.5c-0.1,0-0.2,0.1-0.2,0.1l-2.4,6.7c-0.2,0.7-0.9,1.1-1.6,1.1h-2.3c-0.8,0-1.4-0.8-1.1-1.6l8.3-23.3
C90.7,0.4,91.3,0,92,0H95c0.7,0,1.4,0.4,1.6,1.1l8.3,23.3C105.2,25.2,104.6,26,103.8,26z M95.5,12.7l-1.8-4.9
c-0.1-0.2-0.3-0.2-0.4,0l-1.8,4.9c0,0.1,0.1,0.3,0.2,0.3h3.5C95.4,13,95.5,12.9,95.5,12.7z M83.9,10.2c0,0.2-0.1,0.4-0.1,0.6
c0,0.2-0.1,0.4-0.1,0.6c-0.1,0.5-0.3,1.1-0.6,1.6c-0.1,0.1-0.1,0.3-0.2,0.4c-0.1,0.1-0.1,0.2-0.2,0.4c-0.2,0.4-0.5,0.7-0.8,1.1
c-0.1,0.1-0.2,0.2-0.3,0.3c-0.1,0.1-0.2,0.2-0.3,0.3c-0.5,0.5-1.1,0.9-1.7,1.3c-1.4,0.8-3,1.3-4.7,1.3h-5v6.5c0,0.8-0.7,1.5-1.5,1.5
h-2c-0.8,0-1.5-0.7-1.5-1.5v-23C65,0.7,65.7,0,66.5,0H75c1.7,0,3.3,0.5,4.7,1.3c0.6,0.4,1.2,0.8,1.7,1.3c0.1,0.1,0.2,0.2,0.3,0.3
c0.1,0.1,0.2,0.2,0.3,0.3c0.3,0.3,0.5,0.7,0.8,1.1c0.1,0.1,0.1,0.2,0.2,0.3C83,4.8,83.1,5,83.1,5.1c0.2,0.5,0.4,1,0.6,1.6
c0,0.2,0.1,0.4,0.1,0.6c0,0.2,0.1,0.4,0.1,0.6C83.9,8,84,8.2,84,8.4c0,0.2,0,0.4,0,0.6s0,0.4,0,0.6C84,9.8,83.9,10,83.9,10.2z M75,5
h-4c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h4c2.2,0,4-1.8,4-4S77.2,5,75,5z"
                        />
                    </svg> */}
                    {/* <Image
                        src={LOGO}
                        alt="logo"
                        className="newLogo mt-1"
                        id="myImage"
                        // minheight={"95%"}
                        // minwidth={"95%"}
                    /> */}
                    {/* logo / end */}

                    {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        width="168px"
                        height="40px"
                        // style={{"shape-rendering:geometricPrecision; text-rendering:geometricPrecision;image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"}}
                        // xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                        <g>
                            <path
                                style={{ opacity: 1 }}
                                fill="#fafaf9"
                                d="M -0.5,-0.5 C 55.5,-0.5 111.5,-0.5 167.5,-0.5C 167.5,12.8333 167.5,26.1667 167.5,39.5C 111.5,39.5 55.5,39.5 -0.5,39.5C -0.5,26.1667 -0.5,12.8333 -0.5,-0.5 Z"
                            />
                        </g>
                        <g>
                            <path
                                style={{ opacity: 1 }}
                                fill="#171717"
                                d="M 18.5,13.5 C 17.3991,12.4017 16.0657,12.235 14.5,13C 13.2089,14.2917 13.2089,15.4583 14.5,16.5C 18.6311,16.7109 21.9644,18.3775 24.5,21.5C 24.0191,27.6247 20.6858,29.958 14.5,28.5C 11.8787,27.8789 10.212,26.2123 9.5,23.5C 11.6297,22.2229 13.2964,22.7229 14.5,25C 16.4727,25.4955 18.4727,25.6621 20.5,25.5C 20.5,24.1667 20.5,22.8333 20.5,21.5C 13.242,21.7483 10.0754,18.4149 11,11.5C 15.264,8.65505 19.264,8.98839 23,12.5C 23.4828,13.448 23.6495,14.448 23.5,15.5C 21.4862,15.6085 19.8195,14.9418 18.5,13.5 Z"
                            />
                        </g>
                        <g>
                            <path
                                style={{ opacity: 1 }}
                                fill="#0a0a0a"
                                d="M 40.5,13.5 C 40.414,19.9054 37.0806,22.5721 30.5,21.5C 31.0102,24.3878 30.3435,26.7211 28.5,28.5C 27.5104,22.69 27.1771,16.69 27.5,10.5C 31.1817,10.3347 34.8484,10.5014 38.5,11C 39.3805,11.7083 40.0472,12.5416 40.5,13.5 Z"
                            />
                        </g>
                        <g>
                            <path
                                style={{ opacity: 1 }}
                                fill="#151515"
                                d="M 53.5,25.5 C 52.5514,24.8476 51.3847,24.5143 50,24.5C 47.3159,25.6062 44.8159,26.9395 42.5,28.5C 42.0618,28.5654 41.7284,28.3988 41.5,28C 43.8021,22.2601 45.8021,16.4267 47.5,10.5C 49.4672,10.2606 51.3005,10.5939 53,11.5C 55.3249,16.9755 57.1582,22.6422 58.5,28.5C 57.1667,28.5 55.8333,28.5 54.5,28.5C 54.7373,27.209 54.404,26.209 53.5,25.5 Z"
                            />
                        </g>
                        <g>
                            <path
                                style={{ opacity: 1 }}
                                fill="#121212"
                                d="M 60.5,10.5 C 64.5138,10.3345 68.5138,10.5012 72.5,11C 75.2032,14.5254 74.8698,17.8587 71.5,21C 73.1931,23.2201 74.1931,25.7201 74.5,28.5C 73.1667,28.5 71.8333,28.5 70.5,28.5C 70.5542,24.2196 68.5542,21.8863 64.5,21.5C 64.5,23.8333 64.5,26.1667 64.5,28.5C 63.1667,28.5 61.8333,28.5 60.5,28.5C 60.5,22.5 60.5,16.5 60.5,10.5 Z"
                            />
                        </g>
                        <g>
                            <path
                                style={{ opacity: 1 }}
                                fill="#090909"
                                d="M 89.5,11.5 C 87.0122,13.3878 84.0122,14.0545 80.5,13.5C 80.2322,15.099 80.5655,16.4324 81.5,17.5C 84.0593,17.1984 86.3926,17.5318 88.5,18.5C 86.3647,20.369 83.6981,21.0356 80.5,20.5C 80.2155,22.4147 80.5489,24.0813 81.5,25.5C 84.3854,25.1936 87.0521,25.5269 89.5,26.5C 86.3157,28.4136 82.649,29.0803 78.5,28.5C 77.5104,22.69 77.1771,16.69 77.5,10.5C 81.7016,10.1832 85.7016,10.5166 89.5,11.5 Z"
                            />
                        </g>
                        <g>
                            <path
                                style={{ opacity: 1 }}
                                fill="#171717"
                                d="M 100.5,13.5 C 99.3991,12.4017 98.0657,12.235 96.5,13C 95.2089,14.2917 95.2089,15.4583 96.5,16.5C 100.631,16.7109 103.964,18.3775 106.5,21.5C 106.019,27.6247 102.686,29.958 96.5,28.5C 93.8787,27.8789 92.212,26.2123 91.5,23.5C 93.6297,22.2229 95.2964,22.7229 96.5,25C 98.4727,25.4955 100.473,25.6621 102.5,25.5C 102.5,24.1667 102.5,22.8333 102.5,21.5C 95.242,21.7483 92.0754,18.4149 93,11.5C 97.264,8.65505 101.264,8.98839 105,12.5C 105.483,13.448 105.649,14.448 105.5,15.5C 103.486,15.6085 101.82,14.9418 100.5,13.5 Z"
                            />
                        </g>
                        <g>
                            <path
                                style={{ opacity: 1 }}
                                fill="#ffefaf"
                                d="M 118.5,10.5 C 115.5,10.5 112.5,10.5 109.5,10.5C 109.5,16.5 109.5,22.5 109.5,28.5C 108.51,22.3554 108.177,16.0221 108.5,9.5C 112.042,9.18723 115.375,9.52056 118.5,10.5 Z"
                            />
                        </g>
                        <g>
                            <path
                                style={{ opacity: 1 }}
                                fill="#fbdc5d"
                                d="M 118.5,10.5 C 122.905,12.1168 123.571,14.7835 120.5,18.5C 121.77,19.2876 122.77,20.2876 123.5,21.5C 123.822,23.7224 123.155,25.5557 121.5,27C 117.974,28.3368 114.308,28.8368 110.5,28.5C 110.167,28.5 109.833,28.5 109.5,28.5C 109.5,22.5 109.5,16.5 109.5,10.5C 112.5,10.5 115.5,10.5 118.5,10.5 Z"
                            />
                        </g>
                        <g>
                            <path
                                style={{ opacity: 1 }}
                                fill="#fcdd63"
                                d="M 136.5,25.5 C 134.372,24.3709 132.039,24.2042 129.5,25C 128.663,26.0113 128.33,27.1779 128.5,28.5C 127.5,28.5 126.5,28.5 125.5,28.5C 124.662,28.1583 124.328,27.4916 124.5,26.5C 126.875,21.0474 128.875,15.3807 130.5,9.5C 131.873,9.34332 133.207,9.50999 134.5,10C 137.029,15.9213 139.363,21.9213 141.5,28C 139.019,28.7596 137.353,27.9263 136.5,25.5 Z"
                            />
                        </g>
                        <g>
                            <path
                                style={{ opacity: 1 }}
                                fill="#fcde66"
                                d="M 158.5,10.5 C 154.325,16.1826 151.325,22.1826 149.5,28.5C 148.56,21.9338 145.893,15.9338 141.5,10.5C 142.723,9.38615 144.056,9.21948 145.5,10C 146.874,12.5829 148.374,15.0829 150,17.5C 151.626,15.0829 153.126,12.5829 154.5,10C 156.066,9.23502 157.399,9.40168 158.5,10.5 Z"
                            />
                        </g>
                        <g>
                            <path
                                style={{ opacity: 1 }}
                                fill="#575757"
                                d="M 69.5,13.5 C 67.8333,13.5 66.1667,13.5 64.5,13.5C 64.5,14.8333 64.5,16.1667 64.5,17.5C 66.1667,17.5 67.8333,17.5 69.5,17.5C 67.7354,18.4614 65.7354,18.7947 63.5,18.5C 63.5,16.5 63.5,14.5 63.5,12.5C 65.7354,12.2053 67.7354,12.5386 69.5,13.5 Z"
                            />
                        </g>
                        <g>
                            <path
                                style={{ opacity: 1 }}
                                fill="#adadad"
                                d="M 89.5,11.5 C 90.404,12.209 90.7373,13.209 90.5,14.5C 87.5,14.5 84.5,14.5 81.5,14.5C 81.5,15.5 81.5,16.5 81.5,17.5C 80.5655,16.4324 80.2322,15.099 80.5,13.5C 84.0122,14.0545 87.0122,13.3878 89.5,11.5 Z"
                            />
                        </g>
                        <g>
                            <path
                                style={{ opacity: 1 }}
                                fill="#7e7e7e"
                                d="M 18.5,13.5 C 16.0274,13.0882 14.6941,14.0882 14.5,16.5C 13.2089,15.4583 13.2089,14.2917 14.5,13C 16.0657,12.235 17.3991,12.4017 18.5,13.5 Z"
                            />
                        </g>
                        <g>
                            <path
                                style={{ opacity: 1 }}
                                fill="#e9e9e9"
                                d="M 31.5,13.5 C 33.1992,13.3398 34.8659,13.5065 36.5,14C 37.985,15.7565 37.6516,16.9232 35.5,17.5C 34.1667,17.5 32.8333,17.5 31.5,17.5C 31.5,16.1667 31.5,14.8333 31.5,13.5 Z"
                            />
                        </g>
                        <g>
                            <path
                                style={{ opacity: 1 }}
                                fill="#e9e9e9"
                                d="M 69.5,13.5 C 70.8333,14.8333 70.8333,16.1667 69.5,17.5C 67.8333,17.5 66.1667,17.5 64.5,17.5C 64.5,16.1667 64.5,14.8333 64.5,13.5C 66.1667,13.5 67.8333,13.5 69.5,13.5 Z"
                            />
                        </g>
                        <g>
                            <path
                                style={{ opacity: 1 }}
                                fill="#7e7e7e"
                                d="M 100.5,13.5 C 98.0274,13.0882 96.6941,14.0882 96.5,16.5C 95.2089,15.4583 95.2089,14.2917 96.5,13C 98.0657,12.235 99.3991,12.4017 100.5,13.5 Z"
                            />
                        </g>
                        <g>
                            <path
                                style={{ opacity: 1 }}
                                fill="#e8e7e4"
                                d="M 112.5,13.5 C 114.5,13.5 116.5,13.5 118.5,13.5C 118.5,14.8333 118.5,16.1667 118.5,17.5C 116.5,17.5 114.5,17.5 112.5,17.5C 112.5,16.1667 112.5,14.8333 112.5,13.5 Z"
                            />
                        </g>
                        <g>
                            <path
                                style={{ opacity: 1 }}
                                fill="#868686"
                                d="M 51.5,17.5 C 49.8235,18.1834 49.1568,19.5168 49.5,21.5C 48.6236,21.6309 47.9569,21.2975 47.5,20.5C 48.2357,18.4595 49.0691,16.4595 50,14.5C 50.5133,15.5266 51.0133,16.5266 51.5,17.5 Z"
                            />
                        </g>
                        <g>
                            <path
                                style={{ opacity: 1 }}
                                fill="#898989"
                                d="M 31.5,13.5 C 31.5,14.8333 31.5,16.1667 31.5,17.5C 32.8333,17.5 34.1667,17.5 35.5,17.5C 34.0813,18.4511 32.4147,18.7845 30.5,18.5C 30.2155,16.5853 30.5489,14.9187 31.5,13.5 Z"
                            />
                        </g>
                        <g>
                            <path
                                style={{ opacity: 1 }}
                                fill="#b2aea2"
                                d="M 158.5,10.5 C 159.043,10.56 159.376,10.8933 159.5,11.5C 157.667,14.5 155.833,17.5 154,20.5C 153.502,23.4816 153.335,26.4816 153.5,29.5C 151.901,29.7678 150.568,29.4345 149.5,28.5C 151.325,22.1826 154.325,16.1826 158.5,10.5 Z"
                            />
                        </g>
                        <g>
                            <path
                                style={{ opacity: 1 }}
                                fill="#ededed"
                                d="M 51.5,17.5 C 51.5394,18.5832 51.8728,19.5832 52.5,20.5C 51.675,21.3857 50.675,21.719 49.5,21.5C 49.1568,19.5168 49.8235,18.1834 51.5,17.5 Z"
                            />
                        </g>
                        <g>
                            <path
                                style={{ opacity: 1 }}
                                fill="#dfdcce"
                                d="M 132.5,14.5 C 133.868,16.4181 134.868,18.5848 135.5,21C 133.741,21.7975 132.074,21.6309 130.5,20.5C 131.372,18.5504 132.039,16.5504 132.5,14.5 Z"
                            />
                        </g>
                        <g>
                            <path
                                style={{ opacity: 1 }}
                                fill="#767676"
                                d="M 88.5,18.5 C 89.404,19.209 89.7373,20.209 89.5,21.5C 86.8333,21.5 84.1667,21.5 81.5,21.5C 81.5,22.8333 81.5,24.1667 81.5,25.5C 80.5489,24.0813 80.2155,22.4147 80.5,20.5C 83.6981,21.0356 86.3647,20.369 88.5,18.5 Z"
                            />
                        </g>
                        <g>
                            <path
                                style={{ opacity: 1 }}
                                fill="#a6a6a6"
                                d="M 40.5,13.5 C 42.1406,20.5314 39.1406,23.5314 31.5,22.5C 31.5,24.8333 31.5,27.1667 31.5,29.5C 30.209,29.7373 29.209,29.404 28.5,28.5C 30.3435,26.7211 31.0102,24.3878 30.5,21.5C 37.0806,22.5721 40.414,19.9054 40.5,13.5 Z"
                            />
                        </g>
                        <g>
                            <path
                                style={{ opacity: 1 }}
                                fill="#e5e3de"
                                d="M 112.5,20.5 C 114.527,20.3379 116.527,20.5045 118.5,21C 119.833,22.3333 119.833,23.6667 118.5,25C 116.527,25.4955 114.527,25.6621 112.5,25.5C 112.5,23.8333 112.5,22.1667 112.5,20.5 Z"
                            />
                        </g>
                        <g>
                            <path
                                style={{ opacity: 1 }}
                                fill="#989998"
                                d="M 89.5,26.5 C 90.404,27.209 90.7373,28.209 90.5,29.5C 86.2984,29.8168 82.2984,29.4834 78.5,28.5C 82.649,29.0803 86.3157,28.4136 89.5,26.5 Z"
                            />
                        </g>
                        <g>
                            <path
                                style={{ opacity: 1 }}
                                fill="#8e8e8e"
                                d="M 24.5,21.5 C 26.0743,24.4304 25.4076,26.9304 22.5,29C 19.633,29.8007 16.9664,29.6341 14.5,28.5C 20.6858,29.958 24.0191,27.6247 24.5,21.5 Z"
                            />
                        </g>
                        <g>
                            <path
                                style={{ opacity: 1 }}
                                fill="#8e8e8e"
                                d="M 106.5,21.5 C 108.074,24.4304 107.408,26.9304 104.5,29C 101.633,29.8007 98.9664,29.6341 96.5,28.5C 102.686,29.958 106.019,27.6247 106.5,21.5 Z"
                            />
                        </g>
                        <g>
                            <path
                                style={{ opacity: 1 }}
                                fill="#919191"
                                d="M 53.5,25.5 C 51.396,25.2011 49.396,25.5344 47.5,26.5C 46.4236,29.2195 44.7569,29.8861 42.5,28.5C 44.8159,26.9395 47.3159,25.6062 50,24.5C 51.3847,24.5143 52.5514,24.8476 53.5,25.5 Z"
                            />
                        </g>
                        <g>
                            <path
                                style={{ opacity: 1 }}
                                fill="#a09f9c"
                                d="M 123.5,21.5 C 124.451,22.9187 124.784,24.5853 124.5,26.5C 120.111,29.5367 115.444,30.2034 110.5,28.5C 114.308,28.8368 117.974,28.3368 121.5,27C 123.155,25.5557 123.822,23.7224 123.5,21.5 Z"
                            />
                        </g>
                        <g>
                            <path
                                style={{ opacity: 1 }}
                                fill="#aba79b"
                                d="M 136.5,25.5 C 134.396,25.2011 132.396,25.5344 130.5,26.5C 129.424,29.2195 127.757,29.8861 125.5,28.5C 126.5,28.5 127.5,28.5 128.5,28.5C 128.33,27.1779 128.663,26.0113 129.5,25C 132.039,24.2042 134.372,24.3709 136.5,25.5 Z"
                            />
                        </g>
                    </svg> */}
                </div>
            </AppLink>
        </div>
    );
}

export default Logo;
