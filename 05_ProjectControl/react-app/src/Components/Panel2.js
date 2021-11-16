import React from "react";
import EditableParagraph from "./EditableParagraph";
import AgreementStatus from "./AgreementStatus";

const divStyle = {
  maxWidth: "40rem",
  margin: "auto",
  position: "relative",
};

function Panel2(props) {
  return (
    <div style={divStyle}>

      <h3 className="parTitle">Dolnośląski Wojewódzki Konserwator Zabytków</h3>
        <AgreementStatus title="Opinia konserwatora zabytków" data="konserwatorOpinia" />
        <AgreementStatus title="Decyzja konserwatora zabytków – pozwolenie na prowadzenie robót budowlanych" data="konserwatorDecyzja"/>

      <h3 className="parTitle">Sieci</h3>
        <AgreementStatus title="Warunki i uzgodnienia z Tauronem / Energą" data="energiaUzgodnienie" />
        <AgreementStatus title="Warunki i uzgodnienia z właścicielem kanalizacji deszczowej" data="kanalizacjaUzgodnienie" />
        <AgreementStatus title="Zespół Uzgadniania Dokumentacji ZUD" data="ZUD" />

      <h3 className="parTitle">Zgłoszenie/pozwolenie wodnoprawne</h3>
        <AgreementStatus title="Wody Polskie: Regionalny Zarząd Zlewni" data="wodyPolskie" />

      <h3 className="parTitle">Stała Organizacja Ruchu</h3>
        <AgreementStatus title="Opinia z Urzędu Gminy" data="SOROpiniaGminy" />
        <AgreementStatus title="Opinia Starostwa Powiatowego" data="SOROpiniaPowiatu" />
        <AgreementStatus title="Opinia Zarządu Dróg" data="SOROpiniaZDP" />
        <AgreementStatus title="Opinia Dolnośląskiej Służby Dróg i Kolei" data="SOROpiniaDSDiK" />
        <AgreementStatus title="Zatwierdzenie zarządzającego ruchem na drodze (UG, SP, UM, GDDKiA)" data="SORZatwierdzenie" />

      <h3 className="parTitle">Czasowa Organizacja Ruchu</h3>
        <AgreementStatus title="Opinia z Urzędu Gminy" data="COROpiniaGminy" />
        <AgreementStatus title="Opinia Starostwa Powiatowego" data="COROpiniaPowiatu" />
        <AgreementStatus title="Opinia Zarządu Dróg" data="COROpiniaZDP" />
        <AgreementStatus title="Opinia Dolnośląskiej Służby Dróg i Kolei" data="COROpiniaDSDiK" />
        <AgreementStatus title="Zatwierdzenie zarządzającego ruchem na drodze (UG, SP, UM, GDDKiA)" data="CORZatwierdzenie" />

    </div>
  );
}

export default Panel2;
