import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./groot.module.css";
import Table from "react-bootstrap/Table";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Head from "@docusaurus/Head";
function Check(props) {
  return <img src={useBaseUrl("img/check.png")} width="15" alt="yes" />;
}
function Cross(props) {
  return <img src={useBaseUrl("img/cross.png")} width="15" alt="no" />;
}
export default function Groot() {

  useEffect(() => {
    openPopup();
    (window.plausible =
      window.plausible ||
      function () {
        (window.plausible.q = window.plausible.q || []).push(arguments);
      })
  }, []);

  const renderTooltip = (message, props) => {
    return (
      <Tooltip id="button-tooltip" className={styles.toolTip} {...props}>
        {message}
      </Tooltip>
    );
  };

  const openPopup = () => {
    if (!window.mootrack) {
      !(function (t, n, e, o, a) {
        function d(t) {
          var n = ~~(Date.now() / 3e5),
            o = document.createElement(e);
          (o.async = !0), (o.src = t + "?ts=" + n);
          var a = document.getElementsByTagName(e)[0];
          a.parentNode.insertBefore(o, a);
        }
        (t.MooTrackerObject = a),
          (t[a] =
            t[a] ||
            function () {
              return t[a].q
                ? void t[a].q.push(arguments)
                : void (t[a].q = [arguments]);
            }),
          window.attachEvent
            ? window.attachEvent("onload", d.bind(this, o))
            : window.addEventListener("load", d.bind(this, o), !1);
      })(
        window,
        document,
        "script",
        "https://cdn.stat-track.com/statics/moosend-tracking.min.js",
        "mootrack"
      );
    }
    {
      (" ");
    }
    mootrack("loadForm", "419144d798774876bcfcd1e1f0b6a2ad");

  };

  return (
    <Layout title="Groot" description="Groot Editor">
      {/* groot intro */}
      <Head>
        <script
          defer
          file-types="run,AppImage"
          data-domain="behaviortree.dev"
          src="https://plausible.io/js/script.file-downloads.js"
        ></script>
        <script
          defer
          data-domain="behaviortree.dev"
          src="https://plausible.io/js/script.js"
        ></script>
      </Head>
      <div className={`styles.sectionText`}>
        <div className={`container text--left ${styles.sectionText}`}>
          <div className="row">
            <div className="col col--6">
              <h1>Groot 2</h1>
              <p>
                <b>Groot 2</b> is the Integrated Development Environment to build
                and debug Behavior Trees. It allows you to:
              </p>
              <ul>
                <li>Create and edit trees, using a drag and drop interface.</li>
                <li>Monitor the state of a tree remotely in real-time.</li>
                <li>Debug and test your behaviors.</li>
                <li>Visualize, analyze and replay logs</li>
              </ul>
              <p>
                We are reimaginging Groot to be easier to use and more scalable,
                focusing in particular on the needs of industrial and
                professional users.
                <br />
                If you use BT.CPP and Groot professionally,{" "}
                <a href="mailto:dfaconti@aurynrobotics.com">contact us</a> and
                we will be happy to help.
              </p>

              <div className={styles.buttonGroup}>
                {/* <Link
                  className="button button--primary button--lg umami--click--signup-button"
                        to="https://airtable.com/shrTx7NgRIa0cKlK8">
                        Keep me up to date
                </Link> */}
                <button
                  data-mooform-id="419144d7-9877-4876-bcfc-d1e1f0b6a2ad"
                  className="button button--primary button--lg umami--click--signup-button"
                  onClick={openPopup}
                >
                  Keep me up to date
                </button>
              </div>
              <br />
            </div>
            <div className="col col--6">
              <img
                className={styles.grootImg}
                src={useBaseUrl("img/groot_2.webp")}
                alt="groot 2"
              />
            </div>
          </div>
        </div>
      </div>
      {/* groot versions & cards */}
      <div className={styles.sectionText}></div>
      <div
        className={`${styles.sectionText} ${styles.comparisionSection} ${styles.flexCol}`}
      >
        <div className="container">
          <h2 className="text--center">
            Which version of Groot is the right for you?
          </h2>
          <div className="row">
            <div className="col col--6">
              <div className={`text--left ${styles.sectionText}`}>
                <div className={`row ${styles.grootCardWrapper}`}>
                  <div className={styles.grootCard}>
                    <h2>
                      <img
                        src={useBaseUrl("img/pro_logo_icon.svg")}
                        alt="pro"
                        width="40"
                      />{" "}
                      Groot 2.X
                    </h2>

                    <p>
                      <b>Groot 2</b> is the professional successor of Groot,
                      focusing on improved user experience, debuggability and
                      scalability.
                      <br />
                      It introduces advanced tools to support the entire
                      development cycle, from conception to validation.
                    </p>
                  </div>
                  <div className={styles.grootCard}>
                    <h2>
                      <img
                        src={useBaseUrl("img/open_source_icon.svg")}
                        alt="pro"
                        width="40"
                      />{" "}
                      Groot
                    </h2>
                    <p>
                      <b>Groot</b> is the original open source editor for{" "}
                      <b>BT.CPP</b>.<br />
                      It is not under active development anymore, but it is
                      still a good option for those users who are using{" "}
                      <b>BehaviorTree.CPP 3.8</b>.
                    </p>
                    <div className={styles.buttonGroup}>
                      <Link
                        className="button button--primary"
                        to="https://github.com/BehaviorTree/Groot"
                      >
                        Groot on Github
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col--6">
              {/* groot features table */}
              <div
                className={`${styles.sectionText} ${styles.grootFeatureTableWrapper}`}
              >
                <Table className={styles.grootFeatureTable}>
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th
                        scope="col"
                        className={`text--center ${styles.whitespaceNoWrap}`}
                      >
                        Groot
                      </th>
                      <th
                        scope="col"
                        className={`text--center ${styles.whitespaceNoWrap}`}
                      >
                        Groot 2
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">BehaviorTree.CPP compatibility</th>
                      <td>3.8 only</td>
                      <td>3.8 and 4.2+</td>
                    </tr>
                    <tr>
                      <th scope="row">Open Source</th>
                      <td>
                        <Check />
                      </td>
                      <td>
                        <Cross />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Actively developed</th>
                      <td>
                        <Cross />
                      </td>
                      <td>
                        <Check />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Commercial support</th>
                      <td>
                        <Cross />
                      </td>
                      <td>
                        <Check />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Tree Editor</th>
                      <td>Free</td>
                      <td>Free</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        Multi-file projects
                        <br />
                      </th>
                      <td>
                        <Cross />
                      </td>
                      <td>
                        <Check />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        Support for BT.CPP 4 pre/post conditions
                        <br />
                      </th>
                      <td>
                        <Cross />
                      </td>
                      <td>
                        <Check />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Realtime Monitoring</th>
                      <td>Free</td>
                      <td>PRO only</td>
                    </tr>
                    <tr>
                      <th scope="row">Offline log visualization</th>
                      <td>Free</td>
                      <td>PRO only</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        Advanced Realtime Debugging:
                        <br />
                        <ul>
                          <li>Add breakpoints at run-time</li>
                          <li>Visualize the content of the Blackboard</li>
                          <li>Nodes mocking and automated tests</li>
                          <li>Add fault injection</li>
                        </ul>{" "}
                      </th>
                      <td>
                        <Cross />
                      </td>
                      <td>
                        <Check />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* groot download  */}
      <div
        className={`${styles.sectionText} container ${styles.flexCol} gap-5 `}
      >
        <h1>Download Groot 2</h1>
        <h3>Version: 1.0.1 (Released 2023-07-07)</h3>
        <div className={styles.downloadGroup}>
          <div>
            <img
              className={styles.downloadLogo}
              src={useBaseUrl("img/windows.png")}
              alt="windows logo"
            />
            <Link
              onclick="fathom.trackGoal('I8XXZTK4', 0);"
              to="https://s3.us-west-1.amazonaws.com/download.behaviortree.dev/groot2_windows_installer/Groot2-1.0.1-windows-installer.exe"
            >
              Download Windows installer
            </Link>
          </div>
          <div>
            <img
              className={styles.downloadLogo}
              src={useBaseUrl("img/linux.png")}
              alt="linux logo"
            />
            <Link
              onclick="fathom.trackGoal('VGT2ANC4', 0);"
              to="https://s3.us-west-1.amazonaws.com/download.behaviortree.dev/groot2_linux_installer/Groot2-1.0.1-linux-installer.run"
            >
              Download Linux installer
            </Link>
          </div>
          <div>
            <img
              className={styles.downloadLogo}
              src={useBaseUrl("img/appimage.png")}
              alt="appimage logo"
            />
            <Link
              onclick="fathom.trackGoal('DIQDUTJ2', 0);"
              to="https://s3.us-west-1.amazonaws.com/download.behaviortree.dev/groot2_linux_installer/Groot2-v1.0.1-x86_64.AppImage"
            >
              Download AppImage (Linux)
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
