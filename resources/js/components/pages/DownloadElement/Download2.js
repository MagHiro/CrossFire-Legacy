import React from "react";
import { Container } from "react-bootstrap";
import logowindows from "./../../../assets/windows-logo.png";
import logoandroid from "./../../../assets/android-logo.png";
import Download2Element1 from "./Download2Element1";
import Download2Element2 from "./Download2Element2";
import Download2Element3 from "./Download2Element3";

function Download2() {
    return (
        <Container className="Download2">
            <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                        class="nav-link active"
                        id="nav-download-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-download"
                        type="button"
                        role="tab"
                        aria-controls="nav-download"
                        aria-selected="true"
                    >
                        DOWNLOAD FOR WINDOWS<img src={logowindows} width={44} height={32}/>
                    </button>
                    <button
                        class="nav-link"
                        id="nav-android-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-android"
                        type="button"
                        role="tab"
                        aria-controls="nav-android"
                        aria-selected="false"
                    >
                        DOWNLOAD FOR PHONE<img className="mb-2"src={logoandroid} width={33} height={21}/>
                    </button>
                    <button
                        class="nav-link"
                        id="nav-system-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-system"
                        type="button"
                        role="tab"
                        aria-controls="nav-system"
                        aria-selected="false"
                    >
                        SYSTEM REQUIREMENTS<img src={logowindows} width={44} height={32}/>
                    </button>
                </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
                <div
                    class="tab-pane fade show active"
                    id="nav-download"
                    role="tabpanel"
                    aria-labelledby="nav-download-tab"
                    tabindex="0"
                >
                    <Download2Element1 />
                </div>
                <div
                    class="tab-pane fade"
                    id="nav-android"
                    role="tabpanel"
                    aria-labelledby="nav-android-tab"
                    tabindex="0"
                >
                    <Download2Element2 />
                </div>
                <div
                    class="tab-pane fade"
                    id="nav-system"
                    role="tabpanel"
                    aria-labelledby="nav-system-tab"
                    tabindex="0"
                >
                    <Download2Element3 />
                </div>
            </div>
        </Container>
    );
}

export default Download2;
