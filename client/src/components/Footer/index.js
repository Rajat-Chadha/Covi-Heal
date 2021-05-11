import { lazy, Fragment } from "react";
import { Row, Col } from "antd";
// import i18n from "i18next";
import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";

import * as S from "./styles";

const SvgIcon = lazy(() => import("../../common/SvgIcon"));
const Container = lazy(() => import("../../common/Container"));

const Footer = ({ t }) => {
  // const handleChange = (event) => {
  //   i18n.changeLanguage(event.target.value);
  // };

  const SocialLink = ({ href, src }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <Fragment>
      <Fade bottom>
        <S.Footer>
          <Container>
            <Row type="flex" justify="space-between">
              <Col lg={10} md={10} sm={12} xs={24}>
                <S.Empty />
                <S.Language>{t("ADDRESS")}</S.Language>
                <S.Para>DCRUST MURTHAL, 131027</S.Para>
              </Col>
              <Col lg={6} md={6} sm={12} xs={24}>
                <S.Empty />
                <S.Language>{t("Developer")}</S.Language>
                <S.Para>Rajat Chadha</S.Para>
              </Col>
            </Row>
          </Container>
        </S.Footer>
        <S.Extra>
          <Container border="true">
            <Row
              type="flex"
              justify="space-between"
              align="middle"
              style={{ paddingTop: "3rem" }}
            >
              <S.NavLink to="/">
                <S.LogoContainer>
                  <SvgIcon
                    src="logo2.png"
                    aria-label="homepage"
                    width="200px"
                  />
                  <SvgIcon
                    href="http://www.dcrustm.ac.in/"
                    src="DCRUST.png"
                    aria-label="homepage"
                    width="110px"
                    height = "100px"
                  />
                </S.LogoContainer>
              </S.NavLink>
              <S.FooterContainer>
                <SocialLink
                  href="https://www.linkedin.com/in/rajat-chadha-52b3341a6/"
                  src="linkedin.svg"
                />
                <SocialLink
                  href="https://github.com/Rajat-Chadha/Covi-Heal"
                  src="github.svg"
                />
              </S.FooterContainer>
            </Row>
          </Container>
        </S.Extra>
      </Fade>
    </Fragment>
  );
};

export default withTranslation()(Footer);
