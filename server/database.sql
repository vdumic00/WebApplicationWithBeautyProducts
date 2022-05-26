CREATE DATABASE svijetljepote;

CREATE TABLE parfem(
    parfem_id SERIAL PRIMARY KEY,
    naziv VARCHAR(50),
    cijena SMALLINT
);

CREATE TABLE lak(
    lak_id SERIAL PRIMARY KEY,
    naziv VARCHAR(50),
    cijena SMALLINT,
    boja VARCHAR(20)
);

CREATE TABLE maskara(
    maskara_id SERIAL PRIMARY KEY,
    naziv VARCHAR(50),
    cijena SMALLINT,
    boja VARCHAR(20)
);

CREATE TABLE ruz(
    ruz_id SERIAL PRIMARY KEY,
    naziv VARCHAR(50),
    cijena SMALLINT,
    boja VARCHAR(20)
);

CREATE TABLE puder(
    puder_id SERIAL PRIMARY KEY,
    naziv VARCHAR(50),
    cijena SMALLINT
);

