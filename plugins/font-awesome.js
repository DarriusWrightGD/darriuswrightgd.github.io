import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faWindowClose,
  faWindowMaximize,
  faWindowMinimize
} from "@fortawesome/free-regular-svg-icons";

import {
  faPlus
} from "@fortawesome/free-solid-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faWindowClose, faWindowMaximize, faWindowMinimize, faPlus);

Vue.component("fa-icon", FontAwesomeIcon);