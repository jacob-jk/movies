import poster from "../../../../images/poster.png";
import {
  PersonInfo,
  PersonDescription,
  PersonDescriptionMobile,
  DesktopPersonData,
  Wrapper,
  PersonInfoContainer,
  PersonData,
  PersonImage,
  MobilePersonData,
  PersonName,
  PersonDetail,
} from "./styled";
import ReadMoreButton from "../../../../common/ReadMoreButton";

const PersonDetails = () => {
  return (
    <Wrapper>
      <PersonImage src={poster} alt="" />
      <section>
        <PersonName>Imie nazwisko</PersonName>
        <PersonInfo>
          <PersonInfoContainer>
            <DesktopPersonData>Data urodzenia:</DesktopPersonData>
            <MobilePersonData>Data:</MobilePersonData>
            <PersonDetail>12.12.2020</PersonDetail>
          </PersonInfoContainer>
          <PersonInfoContainer>
            <PersonData>Miejsce urodzenia:</PersonData>
            <PersonDetail>nowy jork</PersonDetail>
          </PersonInfoContainer>
        </PersonInfo>
        <PersonDescription>
          <ReadMoreButton content="Lupita Amondi Nyong'o (born 1 March 1983) is a Kenyan-Mexican actress and author. She began her career in Hollywood as a production assistant. In 2008, she made her acting debut with the short film East River and subsequently returned to Kenya to star in the television series Shuga (2009–2012). In 2009, she wrote, produced and directed the documentary In My Genes. She then pursued a master's degree in acting from the Yale School of Drama. She had her first feature film role as Patsey in 12 Years a Slave (2013), for which she received critical acclaim and won several awards, including the Academy Award for Best Supporting Actress. She became the first Kenyan and Mexican actress to win an Academy Award. She made her Broadway debut as a teenage orphan in the play Eclipsed (2015), for which she was nominated for a Tony Award for Best Actress in a Play. She went on to perform a motion capture role as Maz Kanata in the Star Wars sequel trilogy (2015–2019) and a lead voice role as Raksha in The Jungle Book (2016). Her career progressed with her role as Nakia in the Marvel Cinematic Universe superhero film Black Panther (2018) and her starring role in Jordan Peele's critically acclaimed horror film Us (2019). In addition to acting, she supports historic preservation. She is vocal about preventing sexual harassment and working for women's and animal rights. In 2014, she was named the most beautiful woman by People. She has also written a children's book named Sulwe (2019), which became a number-one New York Times Best-Seller. Also in 2019, she narrated the Discovery Channel docu-series Serengeti, which earned her a Primetime Emmy Award nomination for Outstanding Narrator. She was named among Africa's " />
        </PersonDescription>
      </section>
      <PersonDescriptionMobile>
        <ReadMoreButton content="Lupita Amondi Nyong'o (born 1 March 1983) is a Kenyan-Mexican actress and author. She began her career in Hollywood as a production assistant. In 2008, she made her acting debut with the short film East River and subsequently returned to Kenya to star in the television series Shuga (2009–2012). In 2009, she wrote, produced and directed the documentary In My Genes. She then pursued a master's degree in acting from the Yale School of Drama. She had her first feature film role as Patsey in 12 Years a Slave (2013), for which she received critical acclaim and won several awards, including the Academy Award for Best Supporting Actress. She became the first Kenyan and Mexican actress to win an Academy Award. She made her Broadway debut as a teenage orphan in the play Eclipsed (2015), for which she was nominated for a Tony Award for Best Actress in a Play. She went on to perform a motion capture role as Maz Kanata in the Star Wars sequel trilogy (2015–2019) and a lead voice role as Raksha in The Jungle Book (2016). Her career progressed with her role as Nakia in the Marvel Cinematic Universe superhero film Black Panther (2018) and her starring role in Jordan Peele's critically acclaimed horror film Us (2019). In addition to acting, she supports historic preservation. She is vocal about preventing sexual harassment and working for women's and animal rights. In 2014, she was named the most beautiful woman by People. She has also written a children's book named Sulwe (2019), which became a number-one New York Times Best-Seller. Also in 2019, she narrated the Discovery Channel docu-series Serengeti, which earned her a Primetime Emmy Award nomination for Outstanding Narrator. She was named among Africa's " />
      </PersonDescriptionMobile>
    </Wrapper>
  );
};

export default PersonDetails;
