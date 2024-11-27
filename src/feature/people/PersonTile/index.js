import { List, PeopleListItem, PeopleName, PeoplePoster } from "./styled";
import person from "../../../images/person.png";
import { toPerson } from "../../../routes";

const PersonTile = () => {
  return (
    <List>
      <PeopleListItem to={toPerson()}>
        <PeoplePoster src={person} alt="" />
        <PeopleName>Sabrina Carpenter</PeopleName>
      </PeopleListItem>
      <PeopleListItem to={toPerson()}>
        <PeoplePoster src={person} alt="" />
        <PeopleName>Name</PeopleName>
      </PeopleListItem>
      <PeopleListItem to={toPerson()}>
        <PeoplePoster src={person} alt="" />
        <PeopleName>Name</PeopleName>
      </PeopleListItem>
      <PeopleListItem to={toPerson()}>
        <PeoplePoster src={person} alt="" />
        <PeopleName>Name</PeopleName>
      </PeopleListItem>
      <PeopleListItem to={toPerson()}>
        <PeoplePoster src={person} alt="" />
        <PeopleName>Name</PeopleName>
      </PeopleListItem>
      <PeopleListItem to={toPerson()}>
        <PeoplePoster src={person} alt="" />
        <PeopleName>Name</PeopleName>
      </PeopleListItem>
      <PeopleListItem to={toPerson()}>
        <PeoplePoster src={person} alt="" />
        <PeopleName>Name</PeopleName>
      </PeopleListItem>
      <PeopleListItem to={toPerson()}>
        <PeoplePoster src={person} alt="" />
        <PeopleName>Name</PeopleName>
      </PeopleListItem>
      <PeopleListItem to={toPerson()}>
        <PeoplePoster src={person} alt="" />
        <PeopleName>Name</PeopleName>
      </PeopleListItem>
      <PeopleListItem to={toPerson()}>
        <PeoplePoster src={person} alt="" />
        <PeopleName>Name</PeopleName>
      </PeopleListItem>
      <PeopleListItem to={toPerson()}>
        <PeoplePoster src={person} alt="" />
        <PeopleName>Name</PeopleName>
      </PeopleListItem>
      <PeopleListItem to={toPerson()}>
        <PeoplePoster src={person} alt="" />
        <PeopleName>Name</PeopleName>
      </PeopleListItem>
      <PeopleListItem to={toPerson()}>
        <PeoplePoster src={person} alt="" />
        <PeopleName>Name</PeopleName>
      </PeopleListItem>
      <PeopleListItem to={toPerson()}>
        <PeoplePoster src={person} alt="" />
        <PeopleName>Sydney Sweeeney</PeopleName>
      </PeopleListItem>
      <PeopleListItem to={toPerson()}>
        <PeoplePoster src={person} alt="" />
        <PeopleName>Name</PeopleName>
      </PeopleListItem>
      <PeopleListItem to={toPerson()}>
        <PeoplePoster src={person} alt="" />
        <PeopleName>Name</PeopleName>
      </PeopleListItem>
      <PeopleListItem to={toPerson()}>
        <PeoplePoster src={person} alt="" />
        <PeopleName>Name</PeopleName>
      </PeopleListItem>
    </List>
  );
};

export default PersonTile;
