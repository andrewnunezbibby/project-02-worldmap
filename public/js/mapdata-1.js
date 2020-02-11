var simplemaps_worldmap_mapdata = {
  main_settings: {
    //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    popups: "detect",

    //State defaults
    state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: `/country/${ID}`,
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "no",

    //Location defaults
    location_description: "Location description",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",

    //Label defaults
    label_color: "#d5ddec",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",

    //Zoom settings
    zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: -1,
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,

    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",

    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "yes",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    AF: {
      name: "Afghanistan",
      description: "AF"
    },
    AO: {
      name: "Angola",
      description: "AO"
    },
    AL: {
      name: "Albania",
      description: "AL"
    },
    AE: {
      name: "United Arab Emirates",
      description: "AE"
    },
    AR: {
      name: "Argentina",
      description: "AR"
    },
    AM: {
      name: "Armenia",
      description: "AM"
    },
    AU: {
      name: "Australia",
      description: "AU"
    },
    AT: {
      name: "Austria",
      description: "AT"
    },
    AZ: {
      name: "Azerbaijan",
      description: "AZ"
    },
    BI: {
      name: "Burundi",
      description: "BI"
    },
    BE: {
      name: "Belgium",
      description: "BE"
    },
    BJ: {
      name: "Benin",
      description: "BJ"
    },
    BF: {
      name: "Burkina Faso",
      description: "BF"
    },
    BD: {
      name: "Bangladesh",
      description: "BD"
    },
    BG: {
      name: "Bulgaria",
      description: "BG"
    },
    BH: {
      name: "Bahrain",
      description: "BH"
    },
    BA: {
      name: "Bosnia and Herzegovina",
      description: "BA"
    },
    BY: {
      name: "Belarus",
      description: "BY"
    },
    BZ: {
      name: "Belize",
      description: "BZ"
    },
    BO: {
      name: "Bolivia",
      description: "BO"
    },
    BR: {
      name: "Brazil",
      description: "BR"
    },
    BN: {
      name: "Brunei Darussalam",
      description: "BN"
    },
    BT: {
      name: "Bhutan",
      description: "BT"
    },
    BW: {
      name: "Botswana",
      description: "BW"
    },
    CF: {
      name: "Central African Republic",
      description: "CF"
    },
    CA: {
      name: "Canada",
      description: "CA"
    },
    CH: {
      name: "Switzerland",
      description: "CH"
    },
    CL: {
      name: "Chile",
      description: "CL"
    },
    CN: {
      name: "China",
      description: "CN"
    },
    CI: {
      name: "Côte d'Ivoire",
      description: "CI"
    },
    CM: {
      name: "Cameroon",
      description: "CM"
    },
    CD: {
      name: "Democratic Republic of the Congo",
      description: "CD"
    },
    CG: {
      name: "Republic of Congo",
      description: "CG"
    },
    CO: {
      name: "Colombia",
      description: "CO"
    },
    CR: {
      name: "Costa Rica",
      description: "CR"
    },
    CU: {
      name: "Cuba",
      description: "CU"
    },
    CZ: {
      name: "Czech Republic",
      description: "CZ"
    },
    DE: {
      name: "Germany",
      description: "DE"
    },
    DJ: {
      name: "Djibouti",
      description: "DJ"
    },
    DK: {
      name: "Denmark",
      description: "DK"
    },
    DO: {
      name: "Dominican Republic",
      description: "DO"
    },
    DZ: {
      name: "Algeria",
      description: "DZ"
    },
    EC: {
      name: "Ecuador",
      description: "EC"
    },
    EG: {
      name: "Egypt",
      description: "EG"
    },
    ER: {
      name: "Eritrea",
      description: "ER"
    },
    EE: {
      name: "Estonia",
      description: "EE"
    },
    ET: {
      name: "Ethiopia",
      description: "ET"
    },
    FI: {
      name: "Finland",
      description: "FI"
    },
    FJ: {
      name: "Fiji",
      description: "FJ"
    },
    GA: {
      name: "Gabon",
      description: "GA"
    },
    GB: {
      name: "United Kingdom",
      description: "GB"
    },
    GE: {
      name: "Georgia",
      description: "GE"
    },
    GH: {
      name: "Ghana",
      description: "GH"
    },
    GN: {
      name: "Guinea",
      description: "GN"
    },
    GM: {
      name: "The Gambia",
      description: "GM"
    },
    GW: {
      name: "Guinea-Bissau",
      description: "GW"
    },
    GQ: {
      name: "Equatorial Guinea",
      description: "GQ"
    },
    GR: {
      name: "Greece",
      description: "GR"
    },
    GL: {
      name: "Greenland",
      description: "GL"
    },
    GT: {
      name: "Guatemala",
      description: "GT"
    },
    GY: {
      name: "Guyana",
      description: "GY"
    },
    HN: {
      name: "Honduras",
      description: "HN"
    },
    HR: {
      name: "Croatia",
      description: "HR"
    },
    HT: {
      name: "Haiti",
      description: "HT"
    },
    HU: {
      name: "Hungary",
      description: "HU"
    },
    ID: {
      name: "Indonesia",
      description: "ID"
    },
    IN: {
      name: "India",
      description: "IN"
    },
    IE: {
      name: "Ireland",
      description: "IE"
    },
    IR: {
      name: "Iran",
      description: "IR"
    },
    IQ: {
      name: "Iraq",
      description: "IQ"
    },
    IS: {
      name: "Iceland",
      description: "IS"
    },
    IL: {
      name: "Israel",
      description: "IL"
    },
    IT: {
      name: "Italy",
      description: "IT"
    },
    JM: {
      name: "Jamaica",
      description: "JM"
    },
    JO: {
      name: "Jordan",
      description: "JO"
    },
    JP: {
      name: "Japan",
      description: "JP"
    },
    KZ: {
      name: "Kazakhstan",
      description: "KZ"
    },
    KE: {
      name: "Kenya",
      description: "KE"
    },
    KG: {
      name: "Kyrgyzstan",
      description: "KG"
    },
    KH: {
      name: "Cambodia",
      description: "KH"
    },
    KR: {
      name: "Republic of Korea",
      description: "KR"
    },
    XK: {
      name: "Kosovo",
      description: "XK"
    },
    KW: {
      name: "Kuwait",
      description: "KW"
    },
    LA: {
      name: "Lao PDR",
      description: "LA"
    },
    LB: {
      name: "Lebanon",
      description: "LB"
    },
    LR: {
      name: "Liberia",
      description: "LR"
    },
    LY: {
      name: "Libya",
      description: "LY"
    },
    LK: {
      name: "Sri Lanka",
      description: "LK"
    },
    LS: {
      name: "Lesotho",
      description: "LS"
    },
    LT: {
      name: "Lithuania",
      description: "LT"
    },
    LU: {
      name: "Luxembourg",
      description: "LU"
    },
    LV: {
      name: "Latvia",
      description: "LV"
    },
    MA: {
      name: "Morocco",
      description: "MA"
    },
    MD: {
      name: "Moldova",
      description: "MD"
    },
    MG: {
      name: "Madagascar",
      description: "MG"
    },
    MX: {
      name: "Mexico",
      description: "MX"
    },
    MK: {
      name: "Macedonia",
      description: "MK"
    },
    ML: {
      name: "Mali",
      description: "ML"
    },
    MM: {
      name: "Myanmar",
      description: "MM"
    },
    ME: {
      name: "Montenegro",
      description: "ME"
    },
    MN: {
      name: "Mongolia",
      description: "MN"
    },
    MZ: {
      name: "Mozambique",
      description: "MZ"
    },
    MR: {
      name: "Mauritania",
      description: "MR"
    },
    MW: {
      name: "Malawi",
      description: "MW"
    },
    MY: {
      name: "Malaysia",
      description: "MY"
    },
    NA: {
      name: "Namibia",
      description: "NA"
    },
    NE: {
      name: "Niger",
      description: "NE"
    },
    NG: {
      name: "Nigeria",
      description: "NG"
    },
    NI: {
      name: "Nicaragua",
      description: "NI"
    },
    NL: {
      name: "Netherlands",
      description: "NL"
    },
    NO: {
      name: "Norway",
      description: "NO"
    },
    NP: {
      name: "Nepal",
      description: "NP"
    },
    NZ: {
      name: "New Zealand",
      description: "NZ"
    },
    OM: {
      name: "Oman",
      description: "OM"
    },
    PK: {
      name: "Pakistan",
      description: "PK"
    },
    PA: {
      name: "Panama",
      description: "PA"
    },
    PE: {
      name: "Peru",
      description: "PE"
    },
    PH: {
      name: "Philippines",
      description: "PH"
    },
    PG: {
      name: "Papua New Guinea",
      description: "PG"
    },
    PL: {
      name: "Poland",
      description: "PL"
    },
    KP: {
      name: "Dem. Rep. Korea",
      description: "KP"
    },
    PT: {
      name: "Portugal",
      description: "PT"
    },
    PY: {
      name: "Paraguay",
      description: "PY"
    },
    PS: {
      name: "Palestine",
      description: "PS"
    },
    QA: {
      name: "Qatar",
      description: "QA"
    },
    RO: {
      name: "Romania",
      description: "RO"
    },
    RU: {
      name: "Russia",
      description: "RU"
    },
    RW: {
      name: "Rwanda",
      description: "RW"
    },
    EH: {
      name: "Western Sahara",
      description: "EH"
    },
    SA: {
      name: "Saudi Arabia",
      description: "SA"
    },
    SD: {
      name: "Sudan",
      description: "SD"
    },
    SS: {
      name: "South Sudan",
      description: "SS"
    },
    SN: {
      name: "Senegal",
      description: "SN"
    },
    SL: {
      name: "Sierra Leone",
      description: "SL"
    },
    SV: {
      name: "El Salvador",
      description: "SV"
    },
    RS: {
      name: "Serbia",
      description: "RS"
    },
    SR: {
      name: "Suriname",
      description: "SR"
    },
    SK: {
      name: "Slovakia",
      description: "SK"
    },
    SI: {
      name: "Slovenia",
      description: "SI"
    },
    SE: {
      name: "Sweden",
      description: "SE"
    },
    SZ: {
      name: "Swaziland",
      description: "SZ"
    },
    SY: {
      name: "Syria",
      description: "SY"
    },
    TD: {
      name: "Chad",
      description: "TD"
    },
    TG: {
      name: "Togo",
      description: "TG"
    },
    TH: {
      name: "Thailand",
      description: "TH"
    },
    TJ: {
      name: "Tajikistan",
      description: "TJ"
    },
    TM: {
      name: "Turkmenistan",
      description: "TM"
    },
    TL: {
      name: "Timor-Leste",
      description: "TL"
    },
    TN: {
      name: "Tunisia",
      description: "TN"
    },
    TR: {
      name: "Turkey",
      description: "TR"
    },
    TW: {
      name: "Taiwan",
      description: "TW"
    },
    TZ: {
      name: "Tanzania",
      description: "TZ"
    },
    UG: {
      name: "Uganda",
      description: "UG"
    },
    UA: {
      name: "Ukraine",
      description: "UA"
    },
    UY: {
      name: "Uruguay",
      description: "UY"
    },
    US: {
      name: "United States",
      description: "US"
    },
    UZ: {
      name: "Uzbekistan",
      description: "UZ"
    },
    VE: {
      name: "Venezuela",
      description: "VE"
    },
    VN: {
      name: "Vietnam",
      description: "VN"
    },
    VU: {
      name: "Vanuatu",
      description: "VU"
    },
    YE: {
      name: "Yemen",
      description: "YE"
    },
    ZA: {
      name: "South Africa",
      description: "ZA"
    },
    ZM: {
      name: "Zambia",
      description: "ZM"
    },
    ZW: {
      name: "Zimbabwe",
      description: "ZW"
    },
    SO: {
      name: "Somalia",
      description: "SO"
    },
    GF: {
      name: "France",
      description: "GF"
    },
    FR: {
      name: "France",
      description: "FR"
    },
    ES: {
      name: "Spain",
      description: "ES"
    },
    AW: {
      name: "Aruba",
      description: "AW"
    },
    AI: {
      name: "Anguilla",
      description: "AI"
    },
    AD: {
      name: "Andorra",
      description: "AD"
    },
    AG: {
      name: "Antigua and Barbuda",
      description: "AG"
    },
    BS: {
      name: "Bahamas",
      description: "BS"
    },
    BM: {
      name: "Bermuda",
      description: "BM"
    },
    BB: {
      name: "Barbados",
      description: "BB"
    },
    KM: {
      name: "Comoros",
      description: "KM"
    },
    CV: {
      name: "Cape Verde",
      description: "CV"
    },
    KY: {
      name: "Cayman Islands",
      description: "KY"
    },
    DM: {
      name: "Dominica",
      description: "DM"
    },
    FK: {
      name: "Falkland Islands",
      description: "FK"
    },
    FO: {
      name: "Faeroe Islands",
      description: "FO"
    },
    GD: {
      name: "Grenada",
      description: "GD"
    },
    HK: {
      name: "Hong Kong",
      description: "HK"
    },
    KN: {
      name: "Saint Kitts and Nevis",
      description: "KN"
    },
    LC: {
      name: "Saint Lucia",
      description: "LC"
    },
    LI: {
      name: "Liechtenstein",
      description: "LI"
    },
    MF: {
      name: "Saint Martin (French)",
      description: "MF"
    },
    MV: {
      name: "Maldives",
      description: "MV"
    },
    MT: {
      name: "Malta",
      description: "MT"
    },
    MS: {
      name: "Montserrat",
      description: "MS"
    },
    MU: {
      name: "Mauritius",
      description: "MU"
    },
    NC: {
      name: "New Caledonia",
      description: "NC"
    },
    NR: {
      name: "Nauru",
      description: "NR"
    },
    PN: {
      name: "Pitcairn Islands",
      description: "PN"
    },
    PR: {
      name: "Puerto Rico",
      description: "PR"
    },
    PF: {
      name: "French Polynesia",
      description: "PF"
    },
    SG: {
      name: "Singapore",
      description: "SG"
    },
    SB: {
      name: "Solomon Islands",
      description: "SB"
    },
    ST: {
      name: "São Tomé and Principe",
      description: "ST"
    },
    SX: {
      name: "Saint Martin (Dutch)",
      description: "SX"
    },
    SC: {
      name: "Seychelles",
      description: "SC"
    },
    TC: {
      name: "Turks and Caicos Islands",
      description: "TC"
    },
    TO: {
      name: "Tonga",
      description: "TO"
    },
    TT: {
      name: "Trinidad and Tobago",
      description: "TT"
    },
    VC: {
      name: "Saint Vincent and the Grenadines",
      description: "VC"
    },
    VG: {
      name: "British Virgin Islands",
      description: "VG"
    },
    VI: {
      name: "United States Virgin Islands",
      description: "VI"
    },
    CY: {
      name: "Cyprus",
      description: "CY"
    },
    RE: {
      name: "Reunion (France)",
      description: "RE"
    },
    YT: {
      name: "Mayotte (France)",
      description: "YT"
    },
    MQ: {
      name: "Martinique (France)",
      description: "MQ"
    },
    GP: {
      name: "Guadeloupe (France)",
      description: "GP"
    },
    CW: {
      name: "Curaco (Netherlands)",
      description: "CW"
    },
    IC: {
      name: "Canary Islands (Spain)",
      description: "IC"
    }
  },
  locations: {
    paris: {
      name: "Paris",
      lat: "48.866666670",
      lng: "2.333333333"
    }
  },
  labels: {},
  regions: {
    "0": {
      name: "North America",
      states: [
        "MX",
        "CA",
        "US",
        "GL",
        "BM"
      ]
    },
    "1": {
      name: "South America",
      states: [
        "EC",
        "AR",
        "VE",
        "BR",
        "CO",
        "BO",
        "PE",
        "BZ",
        "CL",
        "CR",
        "CU",
        "DO",
        "SV",
        "GT",
        "GY",
        "GF",
        "HN",
        "NI",
        "PA",
        "PY",
        "PR",
        "SR",
        "UY",
        "JM",
        "HT",
        "BS",
        "FK",
        "AI",
        "AG",
        "AW",
        "BB",
        "VG",
        "KY",
        "DM",
        "MQ",
        "LC",
        "VC",
        "GD",
        "GP",
        "MS",
        "TC",
        "SX",
        "MF",
        "KN",
        "CW"
      ]
    },
    "2": {
      name: "Europe",
      states: [
        "IT",
        "NL",
        "NO",
        "DK",
        "IE",
        "GB",
        "RO",
        "DE",
        "FR",
        "AL",
        "AM",
        "AT",
        "BY",
        "BE",
        "LU",
        "BG",
        "CZ",
        "EE",
        "GE",
        "GR",
        "HU",
        "IS",
        "LV",
        "LT",
        "MD",
        "PL",
        "PT",
        "RS",
        "SI",
        "HR",
        "BA",
        "ME",
        "MK",
        "SK",
        "ES",
        "FI",
        "SE",
        "CH",
        "TR",
        "CY",
        "UA",
        "XK",
        "MT",
        "FO"
      ]
    },
    "3": {
      name: "Africa and the Middle East",
      states: [
        "QA",
        "BH",
        "SA",
        "AE",
        "SY",
        "OM",
        "KW",
        "PK",
        "AZ",
        "AF",
        "IR",
        "IQ",
        "IL",
        "PS",
        "JO",
        "LB",
        "YE",
        "TJ",
        "TM",
        "UZ",
        "KG",
        "NE",
        "AO",
        "EG",
        "TN",
        "GA",
        "DZ",
        "LY",
        "CG",
        "GQ",
        "BJ",
        "BW",
        "BF",
        "BI",
        "CM",
        "CF",
        "TD",
        "CI",
        "CD",
        "DJ",
        "ET",
        "GM",
        "GH",
        "GN",
        "GW",
        "KE",
        "LS",
        "LR",
        "MG",
        "MW",
        "ML",
        "MA",
        "MR",
        "MZ",
        "NA",
        "NG",
        "ER",
        "RW",
        "SN",
        "SL",
        "SO",
        "ZA",
        "SD",
        "SS",
        "SZ",
        "TZ",
        "TG",
        "UG",
        "EH",
        "ZM",
        "ZW",
        "RE",
        "KM",
        "SC",
        "MU",
        "CV",
        "IC",
        "ST",
        "YT"
      ]
    },
    "4": {
      name: "South Asia",
      states: [
        "SG",
        "TW",
        "IN",
        "AU",
        "MY",
        "NP",
        "NZ",
        "TH",
        "BN",
        "JP",
        "VN",
        "LK",
        "SB",
        "FJ",
        "BD",
        "BT",
        "KH",
        "LA",
        "MM",
        "KP",
        "PG",
        "PH",
        "KR",
        "ID",
        "CN",
        "MV",
        "NC",
        "VU",
        "NR"
      ]
    },
    "5": {
      name: "North Asia",
      states: [
        "MN",
        "RU",
        "KZ"
      ]
    }
  }
};