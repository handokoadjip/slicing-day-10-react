import React, { Component } from "react";
import { Header, Main } from "components/atoms";
import {
  SectionHeader,
  SectionGallery,
  SectionNews,
  SectionFooter,
  Footer,
} from "components/molecules";

class index extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scroll(0, 0);
    document.title = "Creative Market | Mountain Everest";
  }

  render() {
    return (
      <>
        <Header>
          <SectionHeader />
        </Header>
        <Main>
          <SectionGallery />
          <SectionNews />
          <SectionFooter />
        </Main>
        <Footer />
      </>
    );
  }
}

export default index;
