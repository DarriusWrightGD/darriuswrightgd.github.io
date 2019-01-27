import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faPlus,
  faCode,
  faCloud,
  faChalkboardTeacher,
  faBook,
  faChargingStation,
  faBars
} from "@fortawesome/free-solid-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faPlus, faCode, faCloud, faChargingStation, faBook,
  faChalkboardTeacher, faBars);

Vue.component("fa-icon", FontAwesomeIcon);