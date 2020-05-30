CREATE TABLE "students" (
  "studentId"         serial  primary key,
  "first_name"        text    not null,
  "middle_initial"    text    not null,
  "last_name"         text    not null,
  "ssn"               text    not null,
  "email"             text    unique        not null,
  "phone_number"      text    not null,
  "cna_number"        text,
  "cna_exp_date"      date,
  "chha_number"       text,
  "chha_exp_date"     date
);