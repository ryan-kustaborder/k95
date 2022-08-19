import React, { Component } from "react";

import GLOBE_ICON from "./icons/globe.png";
import BOOK_ICON from "./icons/book.png";
import CONE from "./icons/cone.png";

import FooterTab from "./k95/FooterTab";
import FolderFileIcon from "./k95/fileIcons/FolderFileIcon";
import GalleryFolder from "./files/GalleryFolder";
import Clock from "./k95/Clock";
import ContactFile from "./files/ContactFile";
import LinkFileIcon from "./k95/fileIcons/LinkFileIcon";

export default class Desktop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            windows: [],
            selected: null,
        };
    }

    selectWindow(window) {
        if (this.state.selected) {
            this.state.selected.setState({ selected: false });
        }
        window.setState({ selected: true });

        this.setState({ selected: window });
    }

    addWindow(window) {
        let newWindows = [];

        for (var oldWindow in this.state.windows) {
            newWindows.push(this.state.windows[oldWindow]);
        }
        newWindows.push(window);
        this.setState({ windows: newWindows });

        return window;
    }

    removeWindow(window) {
        let newWindows = [];

        for (var oldWindow in this.state.windows) {
            if (this.state.windows[oldWindow] !== window)
                newWindows.push(this.state.windows[oldWindow]);
        }

        this.setState({ windows: newWindows });
    }

    render() {
        const tabs = this.state.windows.map((window) => (
            <FooterTab
                window={window}
                key={"Tab = " + window.props.title}
                desktop={this}
            />
        ));

        return (
            <div className="Desktop">
                <div className="desktop-icons">
                    <FolderFileIcon
                        onAddWindow={this.addWindow.bind(this)}
                        onRemoveWindow={this.removeWindow.bind(this)}
                        onSelectWindow={this.selectWindow.bind(this)}
                        title={"About"}
                        icon={BOOK_ICON}
                    />

                    <GalleryFolder
                        onAddWindow={this.addWindow.bind(this)}
                        onRemoveWindow={this.removeWindow.bind(this)}
                        onSelectWindow={this.selectWindow.bind(this)}
                    />

                    <ContactFile
                        onAddWindow={this.addWindow.bind(this)}
                        onRemoveWindow={this.removeWindow.bind(this)}
                        onSelectWindow={this.selectWindow.bind(this)}
                        title={"Contact"}
                    />

                    <FolderFileIcon
                        onAddWindow={this.addWindow.bind(this)}
                        onRemoveWindow={this.removeWindow.bind(this)}
                        onSelectWindow={this.selectWindow.bind(this)}
                        title={"Games"}
                    >
                        <div
                            style={{
                                marginTop: "16px",
                                width: "100%",
                                height: "300px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <img src={CONE}></img>
                            <h1>Coming Soon</h1>
                        </div>
                    </FolderFileIcon>

                    <FolderFileIcon
                        onAddWindow={this.addWindow.bind(this)}
                        onRemoveWindow={this.removeWindow.bind(this)}
                        onSelectWindow={this.selectWindow.bind(this)}
                        title={"Web Demos"}
                        icon={GLOBE_ICON}
                    >
                        <LinkFileIcon
                            onAddWindow={this.addWindow.bind(this)}
                            onRemoveWindow={this.removeWindow.bind(this)}
                            onSelectWindow={this.selectWindow.bind(this)}
                            title={"Accessibility Matters"}
                            useDarkText={true}
                            url="http://eecs.csuohio.edu/~rykustab/project1"
                        />
                    </FolderFileIcon>
                </div>

                {this.state.windows}

                <div className="footer">
                    <button
                        className="button out"
                        onClick={() => {
                            document.documentElement.style.setProperty(
                                "--light-gray",
                                "green"
                            );
                        }}
                    >
                        <p>Start</p>
                    </button>

                    <div className="footer-tabs">{tabs}</div>
                    <Clock />
                </div>
            </div>
        );
    }
}
