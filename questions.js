/* Vaste volgorde; inhoudelijke bron per vraag. */
window.QUIZ_BLOCKS = [
  {
    "id": "foundation",
    "title": "01 · Fundament & governance",
    "description": "Organisatie, identiteit, regio’s en continuïteit bepalen de randvoorwaarden van je ADR.",
    "questions": [
      {
        "id": "q001",
        "topic": "Management groups",
        "prompt": "Je wilt beleid voor alle productieabonnementen centraal afdwingen. Op welk niveau organiseer je dit?",
        "options": [
          "Een resource group in elke regio",
          "Een gedeelde storage account",
          "Een management group boven die subscriptions",
          "Een VNet met alle productieapps"
        ],
        "answer": 2,
        "explanation": "Management groups groeperen subscriptions. Azure Policy en RBAC op dit niveau kunnen doorwerken naar onderliggende scopes.",
        "source": "https://learn.microsoft.com/en-us/azure/governance/management-groups/overview"
      },
      {
        "id": "q002",
        "topic": "Management groups",
        "prompt": "Wat gebeurt er met toepasselijke policytoewijzingen op een bovenliggende management group?",
        "options": [
          "Ze verplaatsen resources naar één regio",
          "Ze vervangen automatisch alle RBAC-rollen",
          "Ze gelden alleen voor de management group zelf",
          "Ze worden geërfd door onderliggende scopes"
        ],
        "answer": 3,
        "explanation": "Hiërarchische overerving maakt centrale guardrails mogelijk. Een kindscope kan een ouderbeleid niet simpelweg versoepelen; exemptions zijn een afzonderlijk mechanisme.",
        "source": "https://learn.microsoft.com/en-us/azure/governance/management-groups/overview"
      },
      {
        "id": "q003",
        "topic": "Management groups",
        "prompt": "Hoeveel directe bovenliggende management groups kan één subscription hebben?",
        "options": [
          "Eén",
          "Onbeperkt",
          "Twee voor hoge beschikbaarheid",
          "Eén per Azure-regio"
        ],
        "answer": 0,
        "explanation": "Een subscription heeft één parent in de management-group-hiërarchie. Ontwerp de indeling op stabiele governancegrenzen.",
        "source": "https://learn.microsoft.com/en-us/azure/governance/management-groups/overview"
      },
      {
        "id": "q004",
        "topic": "Management groups",
        "prompt": "Een team wil management groups per tijdelijke sprint. Wat is de sterkste ADR-keuze?",
        "options": [
          "Kies stabiele grenzen zoals platform en workloads",
          "Maak altijd een groep per ontwikkelaar",
          "Gebruik management groups als netwerksegmenten",
          "Gebruik management groups als back-upbeleid"
        ],
        "answer": 0,
        "explanation": "Management groups ondersteunen governance op schaal. Veel tijdelijke groepen maken beleid en toegangsbeheer moeilijker te doorgronden.",
        "source": "https://learn.microsoft.com/en-us/azure/governance/management-groups/overview"
      },
      {
        "id": "q005",
        "topic": "Subscriptions",
        "prompt": "Waarom krijgen productie en sandbox vaak afzonderlijke subscriptions?",
        "options": [
          "Omdat elke app een eigen Entra-tenant vereist",
          "Voor afzonderlijke governance-, kosten- en quotagrenzen",
          "Omdat alleen productie tags mag gebruiken",
          "Omdat subscriptions automatisch netwerken isoleren met een firewall"
        ],
        "answer": 1,
        "explanation": "Subscriptions bieden een bestuurlijke scheiding. Netwerkisolatie, identiteiten en policies moet je daarnaast expliciet ontwerpen.",
        "source": "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/landing-zone/design-area/resource-org-subscriptions"
      },
      {
        "id": "q006",
        "topic": "Subscriptions",
        "prompt": "Een team raakt een servicespecifiek quotum. Wat onderzoek je eerst?",
        "options": [
          "Of een extra resource group elk quotum verdubbelt",
          "Of tags het quotum uitschakelen",
          "Het quotum en de scope, regio en eventuele verhoging",
          "Of een extra VNet alle capaciteit vrijmaakt"
        ],
        "answer": 2,
        "explanation": "Quota kunnen per subscription, regio of service gelden. Een resource group verhoogt een subscriptionquotum niet.",
        "source": "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/landing-zone/design-area/resource-org-subscriptions"
      },
      {
        "id": "q007",
        "topic": "Subscriptions",
        "prompt": "Wat is een goed gebruik van resource groups binnen een subscription?",
        "options": [
          "Alle wereldwijde netwerkpaden routeren",
          "Iedere resource standaard in een andere tenant plaatsen",
          "Resources met een samenhangende levenscyclus groeperen",
          "Een factuurcontract vervangen"
        ],
        "answer": 2,
        "explanation": "Resource groups zijn logische containers voor beheer en levenscyclus. Verwijderen van een groep verwijdert doorgaans ook de resources daarin.",
        "source": "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/landing-zone/design-area/resource-org-subscriptions"
      },
      {
        "id": "q008",
        "topic": "Subscriptions",
        "prompt": "Een ADR scheidt businessunits via subscriptions. Welke aanvullende maatregel blijft nodig?",
        "options": [
          "Geen, een subscription blokkeert alle netwerkverkeer",
          "Lokale wachtwoorden voor iedere beheerder",
          "Alle resources publiek maken",
          "Expliciete RBAC, policies en netwerkregels"
        ],
        "answer": 3,
        "explanation": "Een subscription is geen automatische netwerkfirewall. Bestuurlijke scheiding moet worden aangevuld met toegangs- en netwerkontwerp.",
        "source": "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/landing-zone/design-area/resource-org-subscriptions"
      },
      {
        "id": "q009",
        "topic": "Regio’s & datalocatie",
        "prompt": "Een Europese connected-car-dienst heeft eisen voor dataresidentie. Wat leg je vast?",
        "options": [
          "Alleen de locatie van het hoofdkantoor",
          "Dat elke Azure-dienst data uitsluitend in één stad opslaat",
          "Alleen de taal van de Azure-portal",
          "Regio’s én servicespecifieke opslag- en replicatievoorwaarden"
        ],
        "answer": 3,
        "explanation": "Een gekozen regio is een beginpunt. Controleer per dienst verwerking, replicatie, metadata en contractuele dataresidentie-eigenschappen.",
        "source": "https://learn.microsoft.com/en-us/azure/reliability/regions-overview"
      },
      {
        "id": "q010",
        "topic": "Regio’s & datalocatie",
        "prompt": "Wat is het verschil tussen een regio en een availability zone?",
        "options": [
          "Een regio bevat precies één datacenter",
          "Een zone is altijd een ander continent",
          "Een zone is een Entra-tenant",
          "Een zone is een afzonderlijke fysieke locatie binnen een regio"
        ],
        "answer": 3,
        "explanation": "Availability zones scheiden onder meer stroom, koeling en netwerk binnen een regio. Niet elke dienst of regio ondersteunt dezelfde zonefuncties.",
        "source": "https://learn.microsoft.com/en-us/azure/reliability/regions-overview"
      },
      {
        "id": "q011",
        "topic": "Regio’s & datalocatie",
        "prompt": "Je selecteert een tweede regio voor disaster recovery. Wat moet je controleren?",
        "options": [
          "Alleen of de regionaam alfabetisch dichtbij ligt",
          "Dat een region pair alle apps automatisch herstelt",
          "Dat elke regio exact dezelfde diensten heeft",
          "Dienstbeschikbaarheid, capaciteit, latency en replicatiemogelijkheden"
        ],
        "answer": 3,
        "explanation": "Een gekoppelde regio is geen automatische DR-oplossing. De workload en diens afhankelijkheden moeten herstel ondersteunen en getest worden.",
        "source": "https://learn.microsoft.com/en-us/azure/reliability/regions-overview"
      },
      {
        "id": "q012",
        "topic": "Regio’s & datalocatie",
        "prompt": "Een fabriek heeft zeer lage latency nodig. Welke regionale keuze is verdedigbaar?",
        "options": [
          "Meet latency vanuit de fabriek en toets compliance en serviceondersteuning",
          "Kies uitsluitend op het aantal availability zones",
          "Kies altijd de goedkoopste wereldregio",
          "Neem aan dat Europa overal dezelfde latency heeft"
        ],
        "answer": 0,
        "explanation": "Regiokeuze is een afweging tussen latency, compliance, kosten en beschikbaarheid. Metingen vanuit de werkelijke clientlocatie ondersteunen het ADR.",
        "source": "https://learn.microsoft.com/en-us/azure/reliability/regions-overview"
      },
      {
        "id": "q013",
        "topic": "Redundantie",
        "prompt": "Wat beschrijft RPO in een continuïteits-ADR?",
        "options": [
          "Het aantal benodigde beheerders",
          "De maximale maandelijkse cloudkosten",
          "De gemiddelde netwerkvertraging",
          "Het maximaal acceptabele gegevensverlies uitgedrukt in tijd"
        ],
        "answer": 3,
        "explanation": "RPO beschrijft hoeveel recente data verloren mag gaan. RTO beschrijft hoe lang herstel maximaal mag duren.",
        "source": "https://learn.microsoft.com/en-us/azure/reliability/overview"
      },
      {
        "id": "q014",
        "topic": "Redundantie",
        "prompt": "Is actieve replicatie voldoende tegen per ongeluk verwijderde klantdata?",
        "options": [
          "Nee, verwijderingen kunnen worden gerepliceerd; herstelpunten blijven nodig",
          "Nee, alleen een snellere CPU kan dit voorkomen",
          "Ja, elke replica bewaart automatisch alle historische versies",
          "Ja, beschikbaarheid vervangt iedere back-up"
        ],
        "answer": 0,
        "explanation": "Beschikbaarheid en herstel van logische fouten zijn andere doelen. Gebruik passende back-ups, versiebeheer en herstelprocedures.",
        "source": "https://learn.microsoft.com/en-us/azure/reliability/overview"
      },
      {
        "id": "q015",
        "topic": "Redundantie",
        "prompt": "Een app moet uitval van één datacenter verdragen. Wat is essentieel?",
        "options": [
          "Alleen twee processen op dezelfde VM",
          "Alleen een extra DNS-record",
          "Zonebestendige app én zonebestendige afhankelijkheden",
          "Alleen een tweede resource group"
        ],
        "answer": 2,
        "explanation": "Beschikbaarheid wordt begrensd door de zwakste noodzakelijke afhankelijkheid. Ontwerp en test de volledige keten voor zone-uitval.",
        "source": "https://learn.microsoft.com/en-us/azure/reliability/overview"
      },
      {
        "id": "q016",
        "topic": "Redundantie",
        "prompt": "Hoe bewijs je dat een disaster-recoveryplan uitvoerbaar is?",
        "options": [
          "Verhoog de resource-tag criticality",
          "Voer hersteltests uit en meet RTO en RPO",
          "Maak alleen een architectuurdiagram",
          "Verwijs uitsluitend naar de Azure-SLA"
        ],
        "answer": 1,
        "explanation": "Een SLA is geen bewijs van applicatieherstel. Oefeningen laten zien of data, capaciteit, configuratie en procedures daadwerkelijk werken.",
        "source": "https://learn.microsoft.com/en-us/azure/reliability/overview"
      },
      {
        "id": "q017",
        "topic": "Microsoft Entra ID",
        "prompt": "Een Azure-app moet een database benaderen zonder opgeslagen wachtwoord. Wat heeft de voorkeur?",
        "options": [
          "Managed identity met passende autorisatie",
          "Een toegangssleutel in een Git-repository",
          "Een gedeeld beheerderswachtwoord in JavaScript",
          "Anonieme toegang tot de database"
        ],
        "answer": 0,
        "explanation": "Managed identities leveren een door Azure beheerde identiteit. De doeldienst moet deze authenticatie ondersteunen en rechten expliciet toekennen.",
        "source": "https://learn.microsoft.com/en-us/entra/fundamentals/whatis"
      },
      {
        "id": "q018",
        "topic": "Microsoft Entra ID",
        "prompt": "Wat is het verschil tussen authenticatie en autorisatie?",
        "options": [
          "Authenticatie bepaalt wie je bent; autorisatie wat je mag",
          "Beide betekenen uitsluitend netwerkversleuteling",
          "Authenticatie bepaalt alleen de factuur",
          "Autorisatie geeft altijd globale beheerdersrechten"
        ],
        "answer": 0,
        "explanation": "Een geldig token betekent niet dat iedere bewerking toegestaan is. Rollen, scopes en servicebeleid bepalen de rechten.",
        "source": "https://learn.microsoft.com/en-us/entra/fundamentals/whatis"
      },
      {
        "id": "q019",
        "topic": "Microsoft Entra ID",
        "prompt": "Beheerders mogen alleen tijdelijk verhoogde rechten krijgen. Welke functie past?",
        "options": [
          "Privileged Identity Management",
          "Storage lifecycle management",
          "Een publiek IP-adres",
          "Azure Front Door caching"
        ],
        "answer": 0,
        "explanation": "PIM ondersteunt tijdgebonden en eventueel goedgekeurde rolactivatie. Dit beperkt permanente privileges; controleer licentievereisten.",
        "source": "https://learn.microsoft.com/en-us/entra/fundamentals/whatis"
      },
      {
        "id": "q020",
        "topic": "Microsoft Entra ID",
        "prompt": "Je wilt MFA en toegangsvoorwaarden voor medewerkers. Welk mechanisme past?",
        "options": [
          "Een NSG op hun mailbox",
          "Een Event Grid-filter",
          "Conditional Access",
          "Een Cosmos DB-partitiesleutel"
        ],
        "answer": 2,
        "explanation": "Conditional Access gebruikt signalen en voorwaarden voor toegangsbeleid. Houd noodtoegang en licentievereisten in het ontwerp rekening.",
        "source": "https://learn.microsoft.com/en-us/entra/fundamentals/whatis"
      }
    ]
  },
  {
    "id": "network",
    "title": "02 · Hybride netwerk & private toegang",
    "description": "Verbind fabrieken en platformdiensten, met bewuste routing en naamresolutie.",
    "questions": [
      {
        "id": "q021",
        "topic": "Virtual Network",
        "prompt": "Wat levert een VNet primair?",
        "options": [
          "Een wereldwijde HTTP-cache",
          "Een logisch geïsoleerd privénetwerk voor Azure-resources",
          "Een automatische databaseback-up",
          "Een SIEM voor securitymeldingen"
        ],
        "answer": 1,
        "explanation": "Een VNet is de basis voor private IP-adressering, subnets en netwerkverbindingen. Toegangsregels en routing worden apart ingericht.",
        "source": "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview"
      },
      {
        "id": "q022",
        "topic": "Virtual Network",
        "prompt": "Wat doet een Network Security Group?",
        "options": [
          "Applicatiegeheimen roteren",
          "Inkomend en uitgaand L3/L4-verkeer filteren met regels",
          "HTTP-aanvallen herkennen via beheerde WAF-regels",
          "Automatisch alle DNS-zones beheren"
        ],
        "answer": 1,
        "explanation": "NSG’s filteren op onder meer bron, doel, poort en protocol. Ze vervangen geen WAF voor applicatieaanvallen.",
        "source": "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview"
      },
      {
        "id": "q023",
        "topic": "Virtual Network",
        "prompt": "Twee te koppelen VNets gebruiken overlappende adresruimtes. Wat is het probleem?",
        "options": [
          "NSG’s hernummeren de subnets",
          "VNet-peering vereist niet-overlappende adresruimtes",
          "Peering maakt automatisch unieke adressen",
          "Private DNS lost ieder adresconflict op"
        ],
        "answer": 1,
        "explanation": "Plan IP-adressering vooraf voor Azure, on-premises en toekomstige groei. Overlap veroorzaakt problemen bij peering en hybride routing.",
        "source": "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview"
      },
      {
        "id": "q024",
        "topic": "Virtual Network",
        "prompt": "Een subnet moet via een inspectie-appliance naar een bestemming. Wat gebruik je voor dat pad?",
        "options": [
          "Een Key Vault-access policy",
          "Een Front Door-rule set",
          "Een resource lock",
          "Een user-defined route naar de juiste next hop"
        ],
        "answer": 3,
        "explanation": "UDR’s beïnvloeden routing op subnetniveau. Controleer effectieve routes, terugroutes en eventuele conflicten met propagatie.",
        "source": "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview"
      },
      {
        "id": "q025",
        "topic": "Hub & spoke",
        "prompt": "Waarom een hub-and-spoke-topologie voor meerdere productteams?",
        "options": [
          "Alle workloads automatisch in één subnet plaatsen",
          "Gedeelde connectiviteit en inspectie centraliseren, workloads scheiden",
          "Alle subscriptions samenvoegen",
          "Alle netwerkbeveiliging uitschakelen"
        ],
        "answer": 1,
        "explanation": "De hub kan centrale diensten zoals gateways en firewalls bevatten. Spokes scheiden workloads met eigen netwerkgrenzen.",
        "source": "https://learn.microsoft.com/en-us/azure/architecture/networking/architecture/hub-spoke"
      },
      {
        "id": "q026",
        "topic": "Hub & spoke",
        "prompt": "Spoke A en B zijn beide met de hub gepeerd. Kunnen ze daardoor automatisch via de hub communiceren?",
        "options": [
          "Alleen als ze dezelfde DNS-labels hebben",
          "Alleen als beide dezelfde tags hebben",
          "Nee, VNet-peering is niet transitief",
          "Ja, alle peerings zijn automatisch transitief"
        ],
        "answer": 2,
        "explanation": "Voor spoke-naar-spokeverkeer zijn expliciete routes en een geschikte transitoplossing nodig, of een directe peering.",
        "source": "https://learn.microsoft.com/en-us/azure/architecture/networking/architecture/hub-spoke"
      },
      {
        "id": "q027",
        "topic": "Hub & spoke",
        "prompt": "Spokes delen de VPN-gateway van de hub. Wat moet je configureren?",
        "options": [
          "Gateway transit en het gebruik van de remote gateway waar ondersteund",
          "Front Door-caching op ieder subnet",
          "Een tweede Entra-tenant per spoke",
          "Alleen identieke resource-groupnamen"
        ],
        "answer": 0,
        "explanation": "Gateway transit maakt een gedeelde gateway bruikbaar. Controleer ook routes, gatewaybeperkingen en de gekozen topologie.",
        "source": "https://learn.microsoft.com/en-us/azure/architecture/networking/architecture/hub-spoke"
      },
      {
        "id": "q028",
        "topic": "Hub & spoke",
        "prompt": "Wat is een belangrijk risico van centrale inspectie in de hub?",
        "options": [
          "Een gedeelde afhankelijkheid en mogelijk bottleneck",
          "Dat spoke-VNets geen private adressen kunnen hebben",
          "Dat iedere VM een publiek IP moet krijgen",
          "Dat logging onmogelijk wordt"
        ],
        "answer": 0,
        "explanation": "Dimensioneer de inspectielaag en ontwerp beschikbaarheid en symmetrische routing. Centralisatie vereenvoudigt beheer maar vergroot de gedeelde impact.",
        "source": "https://learn.microsoft.com/en-us/azure/architecture/networking/architecture/hub-spoke"
      },
      {
        "id": "q029",
        "topic": "ExpressRoute & VPN Gateway",
        "prompt": "Een fabriek wil private connectiviteit met Azure via een provider. Welke dienst past?",
        "options": [
          "Azure Front Door",
          "Microsoft Sentinel",
          "Azure SignalR Service",
          "ExpressRoute"
        ],
        "answer": 3,
        "explanation": "ExpressRoute biedt private connectiviteit via een connectiviteitsprovider. Het is geen gewone site-to-siteverbinding over het publieke internet.",
        "source": "https://learn.microsoft.com/en-us/azure/expressroute/expressroute-introduction"
      },
      {
        "id": "q030",
        "topic": "ExpressRoute & VPN Gateway",
        "prompt": "Is ExpressRoute-verkeer standaard altijd end-to-end versleuteld?",
        "options": [
          "Ja, private peering vervangt ieder encryptiebeleid",
          "Alleen DNS-verkeer is altijd versleuteld",
          "Ja, elk circuit gebruikt automatisch applicatie-TLS",
          "Nee, ontwerp aanvullende versleuteling waar vereist"
        ],
        "answer": 3,
        "explanation": "Privéconnectiviteit en encryptie zijn verschillende eigenschappen. Overweeg bijvoorbeeld applicatie-TLS en ondersteunde IPsec- of MACsec-opties.",
        "source": "https://learn.microsoft.com/en-us/azure/expressroute/expressroute-introduction"
      },
      {
        "id": "q031",
        "topic": "ExpressRoute & VPN Gateway",
        "prompt": "Welke verbinding past bij een snel op te zetten versleutelde site-to-siteverbinding over internet?",
        "options": [
          "Een Event Grid-topic",
          "Een storage service endpoint",
          "Azure VPN Gateway met IPsec/IKE",
          "Front Door met een origin group"
        ],
        "answer": 2,
        "explanation": "VPN Gateway kan IPsec-tunnels over internet opzetten. ExpressRoute vereist providerconnectiviteit en heeft andere kosten en doorlooptijden.",
        "source": "https://learn.microsoft.com/en-us/azure/expressroute/expressroute-introduction"
      },
      {
        "id": "q032",
        "topic": "ExpressRoute & VPN Gateway",
        "prompt": "Is één ExpressRoute-circuit voldoende bewijs voor locatie-onafhankelijke DR?",
        "options": [
          "Ja, een circuit omvat automatisch twee continenten",
          "Nee, ExpressRoute ondersteunt nooit redundantie",
          "Ja, twee BGP-sessies elimineren iedere geografische storing",
          "Nee, beoordeel circuits, peeringlocaties, providers en on-premises routes"
        ],
        "answer": 3,
        "explanation": "Een circuit heeft redundante verbindingen, maar een gedeelde locatie kan een faaldomein blijven. Ontwerp end-to-endredundantie op basis van de eisen.",
        "source": "https://learn.microsoft.com/en-us/azure/expressroute/expressroute-introduction"
      },
      {
        "id": "q033",
        "topic": "Private Link",
        "prompt": "Hoe maak je een ondersteunde PaaS-dienst bereikbaar via een privé-IP in je VNet?",
        "options": [
          "Met een extra openbaar DNS-alias",
          "Met een private endpoint",
          "Met alleen een Azure-budget",
          "Met alleen een resource-tag"
        ],
        "answer": 1,
        "explanation": "Een private endpoint is een netwerkinterface met een privé-IP die via Private Link toegang tot een specifieke dienst biedt.",
        "source": "https://learn.microsoft.com/en-us/azure/private-link/private-link-overview"
      },
      {
        "id": "q034",
        "topic": "Private Link",
        "prompt": "Schakelt het aanmaken van een private endpoint publieke toegang altijd automatisch uit?",
        "options": [
          "Ja, maar alleen in productie",
          "Nee, configureer publieke netwerktoegang afzonderlijk",
          "Nee, private endpoints maken juist alle data openbaar",
          "Ja, voor iedere Azure-dienst"
        ],
        "answer": 1,
        "explanation": "Private en publieke toegang kunnen naast elkaar bestaan. Controleer per dienst de firewall en de instelling voor publieke netwerktoegang.",
        "source": "https://learn.microsoft.com/en-us/azure/private-link/private-link-overview"
      },
      {
        "id": "q035",
        "topic": "Private Link",
        "prompt": "Wat is een belangrijk verschil met een service endpoint?",
        "options": [
          "Beide plaatsen altijd de volledige PaaS-dienst in je subnet",
          "Een private endpoint gebruikt een privé-IP voor de dienst; een service endpoint beveiligt toegang tot het publieke service-endpoint",
          "Een service endpoint is een HTTP-reverseproxy",
          "Private Link werkt uitsluitend met VM’s"
        ],
        "answer": 1,
        "explanation": "Service endpoints koppelen subnetidentiteit aan toegangsbeleid voor ondersteunde diensten. Private Link heeft een ander connectiviteits- en DNS-model.",
        "source": "https://learn.microsoft.com/en-us/azure/private-link/private-link-overview"
      },
      {
        "id": "q036",
        "topic": "Private Link",
        "prompt": "Een private endpoint is goedgekeurd maar de app bereikt de dienst niet. Wat controleer je eerst in de keten?",
        "options": [
          "DNS-resolutie, netwerkpad en serviceautorisatie",
          "Alleen de kleur van het portalicoon",
          "Alleen de factureringsvaluta",
          "Alleen het aantal resource-tags"
        ],
        "answer": 0,
        "explanation": "Een privé-IP maakt nog geen werkende verbinding. Naamresolutie, routes, beveiligingsregels en identiteit moeten samen kloppen.",
        "source": "https://learn.microsoft.com/en-us/azure/private-link/private-link-overview"
      },
      {
        "id": "q037",
        "topic": "Private DNS",
        "prompt": "Waarvoor gebruik je Azure Private DNS-zones?",
        "options": [
          "Verdeling van berichten over consumers",
          "Wereldwijde caching van afbeeldingen",
          "Naamresolutie binnen gekoppelde private netwerken",
          "Versleuteling van databases"
        ],
        "answer": 2,
        "explanation": "Private DNS-zones hosten DNS-records die via gekoppelde VNets beschikbaar zijn. Ze zijn geen publieke DNS-zones.",
        "source": "https://learn.microsoft.com/en-us/azure/dns/private-dns-overview"
      },
      {
        "id": "q038",
        "topic": "Private DNS",
        "prompt": "Een VNet moet records in een private DNS-zone kunnen opzoeken. Wat is nodig?",
        "options": [
          "Een passende virtual-networklink en correcte DNS-configuratie",
          "Een subscription met dezelfde weergavenaam",
          "Een publieke load balancer",
          "Een WAF-policy in detectiemodus"
        ],
        "answer": 0,
        "explanation": "Een zonelink maakt de zone beschikbaar voor een VNet dat de juiste resolver gebruikt. Custom DNS vraagt vaak aanvullende forwarding.",
        "source": "https://learn.microsoft.com/en-us/azure/dns/private-dns-overview"
      },
      {
        "id": "q039",
        "topic": "Private DNS",
        "prompt": "On-premises clients moeten Azure private-endpointnamen oplossen. Wat past?",
        "options": [
          "Een extra storage account aanmaken",
          "Een internetbrowser op iedere VM installeren",
          "DNS-forwarding via Azure DNS Private Resolver met passende regels",
          "Alle private records naar publieke DNS kopiëren"
        ],
        "answer": 2,
        "explanation": "Private Resolver kan hybride DNS-integratie ondersteunen. Forwarding en zonekoppelingen moeten een consistente resolutieketen vormen.",
        "source": "https://learn.microsoft.com/en-us/azure/dns/private-dns-overview"
      },
      {
        "id": "q040",
        "topic": "Private DNS",
        "prompt": "Waarom is een hosts-bestand per server geen schaalbare private-endpointstrategie?",
        "options": [
          "DNS is alleen voor publieke websites",
          "IP-wijzigingen en afwijkende configuraties worden lastig centraal te beheren",
          "Een hosts-bestand versleutelt al het verkeer",
          "Private endpoints ondersteunen uitsluitend IPv6"
        ],
        "answer": 1,
        "explanation": "Gebruik centraal beheerde DNS-zones en forwarding. Dit voorkomt handmatig verspreide, verouderde mappings.",
        "source": "https://learn.microsoft.com/en-us/azure/dns/private-dns-overview"
      }
    ]
  },
  {
    "id": "edge",
    "title": "03 · Edge, toegang & netwerkbeveiliging",
    "description": "Kies waar verkeer binnenkomt, hoe je het verdeelt en waar je het inspecteert.",
    "questions": [
      {
        "id": "q041",
        "topic": "Azure Front Door",
        "prompt": "Een wereldwijd klantenportaal heeft HTTP-routing en edge-acceleratie nodig. Wat past?",
        "options": [
          "Azure Service Bus",
          "Azure Front Door",
          "Een NSG als wereldwijde proxy",
          "Azure Bastion"
        ],
        "answer": 1,
        "explanation": "Front Door is een wereldwijde laag-7dienst voor webapplicaties, met onder meer routing, TLS, caching en WAF-integratie.",
        "source": "https://learn.microsoft.com/en-us/azure/frontdoor/front-door-overview"
      },
      {
        "id": "q042",
        "topic": "Azure Front Door",
        "prompt": "Je wilt Front Door via Private Link met een ondersteunde origin verbinden. Welke tier onderzoek je?",
        "options": [
          "Iedere tier ondersteunt dit identiek",
          "Front Door Premium",
          "Een Log Analytics-pricingtier",
          "Alleen een storage access tier"
        ],
        "answer": 1,
        "explanation": "Private Link naar ondersteunde origins is een Premium-functie. Controleer het origintype en regionale ondersteuning.",
        "source": "https://learn.microsoft.com/en-us/azure/frontdoor/front-door-overview"
      },
      {
        "id": "q043",
        "topic": "Azure Front Door",
        "prompt": "Welke content is meestal geschikt voor edge-caching?",
        "options": [
          "Publieke statische assets met passende cacheheaders",
          "Persoonlijke dossiers zonder cachevariatie",
          "Alle betaalverzoeken met dezelfde cachekey",
          "Authenticatietokens van alle gebruikers"
        ],
        "answer": 0,
        "explanation": "Cache alleen content die veilig gedeeld kan worden en ontwerp de cachekey en headers bewust. Vermijd het lekken van gebruikersspecifieke data.",
        "source": "https://learn.microsoft.com/en-us/azure/frontdoor/front-door-overview"
      },
      {
        "id": "q044",
        "topic": "Azure Front Door",
        "prompt": "Waarom moet een origin achter Front Door extra worden afgeschermd?",
        "options": [
          "Omdat Front Door geen HTTPS ondersteunt",
          "Om omzeiling van edgebeleid via directe origintoegang te beperken",
          "Omdat caching anders altijd faalt",
          "Omdat origins nooit authenticatie mogen gebruiken"
        ],
        "answer": 1,
        "explanation": "Beperk origintoegang met ondersteunde netwerkmaatregelen en validatie. Alleen een DNS-alias naar Front Door blokkeert directe toegang niet.",
        "source": "https://learn.microsoft.com/en-us/azure/frontdoor/front-door-overview"
      },
      {
        "id": "q045",
        "topic": "Application Gateway",
        "prompt": "Je hebt regionale HTTP-routing naar backends in een VNet nodig. Wat past?",
        "options": [
          "Azure Key Vault",
          "Azure Management Groups",
          "Azure Application Gateway",
          "Azure Event Hubs"
        ],
        "answer": 2,
        "explanation": "Application Gateway is een regionale laag-7loadbalancer voor webverkeer, met host- en padgebaseerde routing en optionele WAF.",
        "source": "https://learn.microsoft.com/en-us/azure/application-gateway/overview"
      },
      {
        "id": "q046",
        "topic": "Application Gateway",
        "prompt": "Welke routing past bij /catalog naar service A en /orders naar service B?",
        "options": [
          "Padgebaseerde routing",
          "Entra-tenantreplicatie",
          "Storage lifecycle management",
          "BGP-routering op gebruikersnaam"
        ],
        "answer": 0,
        "explanation": "Application Gateway kan URL-paden gebruiken om requests naar verschillende backendpools te sturen.",
        "source": "https://learn.microsoft.com/en-us/azure/application-gateway/overview"
      },
      {
        "id": "q047",
        "topic": "Application Gateway",
        "prompt": "Wat betekent end-to-end-TLS bij Application Gateway?",
        "options": [
          "TLS naar de gateway én TLS van gateway naar backend",
          "Alleen encryptie van back-ups",
          "Alleen TLS tussen browser en gateway",
          "Dat DNS geen certificaten nodig heeft"
        ],
        "answer": 0,
        "explanation": "TLS-terminatie aan de gateway hoeft het backendtraject niet onversleuteld te maken. Configureer ook backendcertificaatvalidatie correct.",
        "source": "https://learn.microsoft.com/en-us/azure/application-gateway/overview"
      },
      {
        "id": "q048",
        "topic": "Application Gateway",
        "prompt": "Een backend is gezond maar krijgt geen verkeer. Welke configuratie controleer je?",
        "options": [
          "Health probe, hostnaam, listener, rule en backendinstellingen",
          "Alleen de browsertaal",
          "Alleen management-group-tags",
          "Alleen de Azure-budgetdrempel"
        ],
        "answer": 0,
        "explanation": "Onjuiste probes of hostheaders kunnen gezonde backends onbeschikbaar laten lijken. Controleer de hele requestketen.",
        "source": "https://learn.microsoft.com/en-us/azure/application-gateway/overview"
      },
      {
        "id": "q049",
        "topic": "Azure Firewall",
        "prompt": "Wat is een primair gebruik van Azure Firewall in een hub?",
        "options": [
          "Een berichtenwachtrij met dead letters",
          "Secrets als database opslaan",
          "Een wereldwijd gebruikersidentiteitsregister",
          "Centrale stateful netwerkinspectie en egresscontrole"
        ],
        "answer": 3,
        "explanation": "Azure Firewall is een beheerde netwerkbeveiligingsdienst. Richt routes en regels zo in dat relevant verkeer daadwerkelijk langs de firewall gaat.",
        "source": "https://learn.microsoft.com/en-us/azure/firewall/overview"
      },
      {
        "id": "q050",
        "topic": "Azure Firewall",
        "prompt": "Welke functie onderscheidt Azure Firewall Premium voor geavanceerde inspectie?",
        "options": [
          "Het bestaan van een publiek IP-adres",
          "TLS-inspectie en IDPS",
          "Het kunnen plaatsen van resource-tags",
          "Alleen TCP-poortregels"
        ],
        "answer": 1,
        "explanation": "Premium biedt onder meer TLS-inspectie en intrusion detection/prevention. Certificaatbeheer en privacy-eisen horen bij de afweging.",
        "source": "https://learn.microsoft.com/en-us/azure/firewall/overview"
      },
      {
        "id": "q051",
        "topic": "Azure Firewall",
        "prompt": "Een workload moet alleen goedgekeurde webbestemmingen bereiken. Wat past?",
        "options": [
          "Een management-groupweergavenaam",
          "Alle uitgaande poorten naar alle adressen toestaan",
          "Alleen een inbound NSG-regel",
          "Application rules met passende FQDN-beperkingen"
        ],
        "answer": 3,
        "explanation": "Application rules kunnen HTTP(S)-verkeer op FQDN’s beperken. DNS, routes en uitzonderingen moeten aansluiten bij het ontwerp.",
        "source": "https://learn.microsoft.com/en-us/azure/firewall/overview"
      },
      {
        "id": "q052",
        "topic": "Azure Firewall",
        "prompt": "Vervangt Azure Firewall automatisch een WAF voor het klantenportaal?",
        "options": [
          "Ja, TLS-inspectie maakt applicatiebeveiliging overbodig",
          "Ja, iedere firewallregel is een SQL-injectieregel",
          "Nee, een WAF adresseert specifieke HTTP-applicatieaanvallen",
          "Alleen als de app in dezelfde resource group staat"
        ],
        "answer": 2,
        "explanation": "Netwerkfirewalls en WAF’s hebben verschillende verantwoordelijkheden. Combineer ze waar de risicoanalyse dat vraagt.",
        "source": "https://learn.microsoft.com/en-us/azure/firewall/overview"
      },
      {
        "id": "q053",
        "topic": "Web Application Firewall",
        "prompt": "Welke aanval adresseert een beheerde WAF-regelset typisch?",
        "options": [
          "Een verkeerd subscriptionbudget",
          "SQL-injectie via HTTP-requests",
          "Een overlappende VNet-adresruimte",
          "Een vergeten databaseback-up"
        ],
        "answer": 1,
        "explanation": "Een WAF inspecteert webverkeer op bekende aanvalspatronen zoals SQL-injectie en XSS. Veilige applicatiecode blijft nodig.",
        "source": "https://learn.microsoft.com/en-us/azure/web-application-firewall/overview"
      },
      {
        "id": "q054",
        "topic": "Web Application Firewall",
        "prompt": "Wat is het verschil tussen detection en prevention mode?",
        "options": [
          "Beide modi veranderen uitsluitend DNS",
          "Detection blokkeert altijd meer verkeer",
          "Detection logt; prevention kan overeenkomend verkeer blokkeren",
          "Prevention schakelt alle logging uit"
        ],
        "answer": 2,
        "explanation": "Begin gecontroleerd met observatie en tuning. Schakel blokkering bewust in nadat legitieme patronen zijn beoordeeld.",
        "source": "https://learn.microsoft.com/en-us/azure/web-application-firewall/overview"
      },
      {
        "id": "q055",
        "topic": "Web Application Firewall",
        "prompt": "Een legitiem uploadveld triggert een WAF-regel. Wat is een passende aanpak?",
        "options": [
          "Verwijder alle application logs",
          "Schakel alle beveiliging permanent uit",
          "Sta ieder request met een cookie toe",
          "Analyseer de match en maak een zo beperkt mogelijke uitzondering"
        ],
        "answer": 3,
        "explanation": "Gerichte uitsluitingen beperken false positives terwijl andere bescherming behouden blijft. Documenteer de reden en valideer het effect.",
        "source": "https://learn.microsoft.com/en-us/azure/web-application-firewall/overview"
      },
      {
        "id": "q056",
        "topic": "Web Application Firewall",
        "prompt": "Is een WAF voldoende om gebroken objectautorisatie in een API op te lossen?",
        "options": [
          "Nee, de API moet objecttoegang zelf correct autoriseren",
          "Ja, als caching uitstaat",
          "Ja, de WAF kent automatisch alle businessrechten",
          "Ja, als HTTPS aanstaat"
        ],
        "answer": 0,
        "explanation": "Een WAF kent de volledige bedrijfslogica niet. Applicatieautorisatie en beveiligingstests blijven noodzakelijk.",
        "source": "https://learn.microsoft.com/en-us/azure/web-application-firewall/overview"
      },
      {
        "id": "q057",
        "topic": "Azure Bastion",
        "prompt": "Beheerders moeten VM’s benaderen zonder publieke IP’s op die VM’s. Welke dienst past?",
        "options": [
          "Azure Event Grid",
          "Azure Bastion",
          "Azure Front Door",
          "Azure AI Search"
        ],
        "answer": 1,
        "explanation": "Bastion biedt beheerde RDP/SSH-toegang naar VM’s via hun private IP. Identiteit, rollen en netwerkregels blijven vereist.",
        "source": "https://learn.microsoft.com/en-us/azure/bastion/bastion-overview"
      },
      {
        "id": "q058",
        "topic": "Azure Bastion",
        "prompt": "Moet iedere doel-VM voor Bastion een eigen publiek IP krijgen?",
        "options": [
          "Alleen Linux-VM’s",
          "Ja, voor zowel SSH als RDP",
          "Alleen VM’s in productie",
          "Nee"
        ],
        "answer": 3,
        "explanation": "Bastion is juist bedoeld om beheer naar private VM-adressen mogelijk te maken. De deploymentopties van Bastion zelf verschillen per SKU.",
        "source": "https://learn.microsoft.com/en-us/azure/bastion/bastion-overview"
      },
      {
        "id": "q059",
        "topic": "Azure Bastion",
        "prompt": "Bastion is ingericht. Welke toegangscontrole blijft nodig?",
        "options": [
          "Alleen het kennen van de VM-naam",
          "Passende Azure-rechten en geldige VM-aanmelding",
          "Geen, iedere tenantgebruiker krijgt root",
          "Alleen een storage SAS-token"
        ],
        "answer": 1,
        "explanation": "Het netwerkpad verleent geen beheerrechten op de VM. Configureer RBAC en de gekozen OS-authenticatie afzonderlijk.",
        "source": "https://learn.microsoft.com/en-us/azure/bastion/bastion-overview"
      },
      {
        "id": "q060",
        "topic": "Azure Bastion",
        "prompt": "Is Bastion een algemene site-to-siteverbinding voor fabriekssystemen?",
        "options": [
          "Ja, het vervangt alle hybride gateways",
          "Alleen voor Event Hubs",
          "Nee, gebruik daarvoor bijvoorbeeld VPN Gateway of ExpressRoute",
          "Ja, zolang RDP-poort 3389 openstaat"
        ],
        "answer": 2,
        "explanation": "Bastion is gericht op interactieve beheerverbindingen. Algemene hybride netwerkconnectiviteit vraagt andere diensten.",
        "source": "https://learn.microsoft.com/en-us/azure/bastion/bastion-overview"
      },
      {
        "id": "q061",
        "topic": "Front Door rule sets",
        "prompt": "Je wilt bij de edge een beveiligingsheader aan responses toevoegen. Wat past?",
        "options": [
          "Een VNet-peering",
          "Een Entra-gastaccount",
          "Een Service Bus-subscription",
          "Een Front Door-rule set met een responseheaderactie"
        ],
        "answer": 3,
        "explanation": "Rule sets verwerken voorwaarden en acties voor requests en responses, zoals headerwijzigingen en redirects.",
        "source": "https://learn.microsoft.com/en-us/azure/frontdoor/front-door-rules-engine"
      },
      {
        "id": "q062",
        "topic": "Front Door rule sets",
        "prompt": "Je hebt een rule set gemaakt maar ziet geen effect. Wat controleer je eerst?",
        "options": [
          "Of de database gepartitioneerd is",
          "Of er een nieuwe management group is",
          "Of deze aan de relevante route is gekoppeld en de voorwaarden matchen",
          "Of de origin een ander kostenlabel heeft"
        ],
        "answer": 2,
        "explanation": "Een los aangemaakte rule set wordt niet vanzelf voor al het verkeer uitgevoerd. Koppeling en voorwaarden bepalen het bereik.",
        "source": "https://learn.microsoft.com/en-us/azure/frontdoor/front-door-rules-engine"
      },
      {
        "id": "q063",
        "topic": "Front Door rule sets",
        "prompt": "Een oude product-URL moet naar een nieuwe URL verwijzen. Welke actie is passend?",
        "options": [
          "Een NSG deny-regel",
          "Een database failover",
          "URL redirect",
          "Een DNS-zone verwijderen"
        ],
        "answer": 2,
        "explanation": "Een redirect laat de client een nieuwe URL opvragen. Een rewrite verandert het pad richting de origin zonder dezelfde zichtbare clientredirect.",
        "source": "https://learn.microsoft.com/en-us/azure/frontdoor/front-door-rules-engine"
      },
      {
        "id": "q064",
        "topic": "Front Door rule sets",
        "prompt": "Waarom doet de volgorde van Front Door-regels ertoe?",
        "options": [
          "Omdat alleen de langste regel werkt",
          "Omdat regels altijd willekeurig worden uitgevoerd",
          "Meerdere matchende regels en stop-evaluatie beïnvloeden het resultaat",
          "Omdat volgorde uitsluitend de factuur bepaalt"
        ],
        "answer": 2,
        "explanation": "Ontwerp regels in een bewuste volgorde en test combinaties. Een stop-evaluatieactie kan voorkomen dat latere regels nog worden verwerkt.",
        "source": "https://learn.microsoft.com/en-us/azure/frontdoor/front-door-rules-engine"
      },
      {
        "id": "q065",
        "topic": "Front Door origin groups",
        "prompt": "Wat groepeer je in een Front Door-origin group?",
        "options": [
          "Backends waarnaar Front Door verkeer kan sturen",
          "Storage-encryptiesleutels",
          "Entra-gebruikers met dezelfde functie",
          "Azure Policy-definities"
        ],
        "answer": 0,
        "explanation": "Een origin group verzamelt backends met instellingen voor health probes en verkeersverdeling.",
        "source": "https://learn.microsoft.com/en-us/azure/frontdoor/origin"
      },
      {
        "id": "q066",
        "topic": "Front Door origin groups",
        "prompt": "Je wilt een primaire en een standby-origin. Welke instelling is leidend?",
        "options": [
          "Alleen verschillende DNS-TTL’s op de clients",
          "Alleen extra caching op de standby",
          "Alleen een andere resourcenaam",
          "Verschillende prioriteiten met passende health probes"
        ],
        "answer": 3,
        "explanation": "Front Door kan gezonde origins met de hoogste voorkeur gebruiken. Prioriteit wordt gebruikt voor active/passiveontwerpen.",
        "source": "https://learn.microsoft.com/en-us/azure/frontdoor/origin"
      },
      {
        "id": "q067",
        "topic": "Front Door origin groups",
        "prompt": "Waarvoor gebruik je origin weights?",
        "options": [
          "Relatieve verkeersverdeling tussen daarvoor in aanmerking komende origins",
          "Bepalen hoeveel gebruikers mogen inloggen",
          "Encryptiesleutels per origin berekenen",
          "Een exacte latencygarantie afdwingen"
        ],
        "answer": 0,
        "explanation": "Weights beïnvloeden verdeling tussen origins die na health-, prioriteits- en latencyselectie overblijven. Het is geen exact percentage per klein requestmonster.",
        "source": "https://learn.microsoft.com/en-us/azure/frontdoor/origin"
      },
      {
        "id": "q068",
        "topic": "Front Door origin groups",
        "prompt": "Welke health probe ondersteunt zinvolle failover?",
        "options": [
          "Een endpoint waarvoor elke probe handmatige MFA vraagt",
          "Altijd een statisch 200-antwoord terwijl de app defect is",
          "Een endpoint dat echte bestellingen aanmaakt",
          "Een lichte endpoint die relevante gereedheid weerspiegelt"
        ],
        "answer": 3,
        "explanation": "De probe moet betrouwbaar en zonder ongewenste bijwerkingen werken. Bepaal bewust welke afhankelijkheden de app onbruikbaar maken.",
        "source": "https://learn.microsoft.com/en-us/azure/frontdoor/origin"
      }
    ]
  },
  {
    "id": "compute",
    "title": "04 · Applicaties & compute",
    "description": "Kies de kleinste passende beheerlast voor de benodigde runtime en controle.",
    "questions": [
      {
        "id": "q069",
        "topic": "Azure App Service",
        "prompt": "Een team wil een web-API hosten zonder Kubernetes te beheren. Wat past vaak?",
        "options": [
          "Azure App Service",
          "Azure Private DNS",
          "Een Event Grid-domain",
          "Een management group"
        ],
        "answer": 0,
        "explanation": "App Service is beheerde hosting voor webapps en API’s. Beoordeel runtime, schaalvereisten, netwerkfuncties en kosten.",
        "source": "https://learn.microsoft.com/en-us/azure/app-service/overview"
      },
      {
        "id": "q070",
        "topic": "Azure App Service",
        "prompt": "Waarvoor gebruik je deployment slots?",
        "options": [
          "Een opslagaccount automatisch repliceren",
          "Een nieuwe appversie voorbereiden en gecontroleerd wisselen",
          "Een tweede Entra-tenant aanmaken",
          "Een volledige database point-in-time restore"
        ],
        "answer": 1,
        "explanation": "Slots ondersteunen staging en swaps in daarvoor geschikte tiers. Databasemigraties en slotgebonden instellingen vereisen apart ontwerp.",
        "source": "https://learn.microsoft.com/en-us/azure/app-service/overview"
      },
      {
        "id": "q071",
        "topic": "Azure App Service",
        "prompt": "Wat doet VNet Integration bij App Service primair?",
        "options": [
          "Alle HTTP-responses cachen",
          "Uitgaand verkeer van de app naar een VNet mogelijk maken",
          "Een WAF aan iedere app toevoegen",
          "Automatisch alle inkomende toegang private maken"
        ],
        "answer": 1,
        "explanation": "VNet Integration richt zich op outboundconnectiviteit. Voor private inkomende toegang onderzoek je een private endpoint en toegangsbeleid.",
        "source": "https://learn.microsoft.com/en-us/azure/app-service/overview"
      },
      {
        "id": "q072",
        "topic": "Azure App Service",
        "prompt": "Meerdere apps draaien in hetzelfde App Service-plan. Wat delen ze?",
        "options": [
          "Verplicht dezelfde broncode",
          "De compute-resources van dat plan",
          "Automatisch dezelfde databasegebruiker",
          "Altijd dezelfde applicatie-identiteit"
        ],
        "answer": 1,
        "explanation": "Apps in een plan delen capaciteit. Houd rekening met onderlinge resourceconcurrentie, schaalgedrag en isolatie-eisen.",
        "source": "https://learn.microsoft.com/en-us/azure/app-service/overview"
      },
      {
        "id": "q073",
        "topic": "Azure Container Apps",
        "prompt": "Een team wil containers en eventgedreven schalen zonder de Kubernetes-API te beheren. Wat past?",
        "options": [
          "Azure Container Apps",
          "Een gewone private DNS-zone",
          "Een management group",
          "Azure Bastion"
        ],
        "answer": 0,
        "explanation": "Container Apps biedt een beheerd containerplatform met ingress, revisies en schaalregels. Het geeft niet dezelfde clustercontrole als AKS.",
        "source": "https://learn.microsoft.com/en-us/azure/container-apps/overview"
      },
      {
        "id": "q074",
        "topic": "Azure Container Apps",
        "prompt": "Wat is een revision in Container Apps?",
        "options": [
          "Een onveranderlijke versie van een applicatieconfiguratie",
          "Een database-index",
          "Een nieuwe subscription",
          "Een handmatig gewijzigde VM-snapshot"
        ],
        "answer": 0,
        "explanation": "Revisions ondersteunen versiebeheer en, bij de juiste modus, verkeerssplitsing. Niet iedere configuratiewijziging maakt een nieuwe revision.",
        "source": "https://learn.microsoft.com/en-us/azure/container-apps/overview"
      },
      {
        "id": "q075",
        "topic": "Azure Container Apps",
        "prompt": "Een weinig gebruikte service moet naar nul schalen. Welke afweging hoort in het ADR?",
        "options": [
          "Dat schaalregels databaseback-ups vervangen",
          "Dat nul replicas geen startvertraging kunnen geven",
          "Geschikte schaaltrigger en mogelijke cold-startlatency",
          "Dat alle triggers altijd nul replicas ondersteunen"
        ],
        "answer": 2,
        "explanation": "Scale-to-zero is afhankelijk van configuratie en trigger. Latencygevoelige workloads kunnen minimumreplica’s nodig hebben.",
        "source": "https://learn.microsoft.com/en-us/azure/container-apps/overview"
      },
      {
        "id": "q076",
        "topic": "Azure Container Apps",
        "prompt": "Een team vereist eigen Kubernetes-operators en directe cluster-API-toegang. Welke keuze ligt meer voor de hand?",
        "options": [
          "AKS",
          "Container Apps uitsluitend vanwege het containerformaat",
          "Front Door-rule sets als scheduler",
          "Private Link als runtime"
        ],
        "answer": 0,
        "explanation": "Container Apps abstraheert de orchestrator. Voor Kubernetes-specifieke extensies en clustercontrole is AKS doorgaans passender.",
        "source": "https://learn.microsoft.com/en-us/azure/container-apps/overview"
      },
      {
        "id": "q077",
        "topic": "Azure Kubernetes Service",
        "prompt": "Wanneer is AKS een verdedigbare keuze boven eenvoudiger PaaS?",
        "options": [
          "Zodra een app één HTTP-endpoint heeft",
          "Bij noodzakelijke Kubernetes-API’s, operators en geavanceerde orkestratie",
          "Omdat AKS geen operationeel beheer vraagt",
          "Alleen omdat een containerimage bestaat"
        ],
        "answer": 1,
        "explanation": "AKS geeft veel controle maar brengt verantwoordelijkheid voor workloads, upgrades, policies en capaciteit mee. Leg de noodzaak in het ADR vast.",
        "source": "https://learn.microsoft.com/en-us/azure/aks/what-is-aks"
      },
      {
        "id": "q078",
        "topic": "Azure Kubernetes Service",
        "prompt": "Wat schaalt de Horizontal Pod Autoscaler?",
        "options": [
          "Het aantal podreplica’s op basis van geschikte metrics",
          "De wereldwijd beschikbare Azure-regio’s",
          "Automatisch iedere databasepartitie",
          "Het aantal management groups"
        ],
        "answer": 0,
        "explanation": "HPA schaalt pods. Een cluster autoscaler schaalt nodes binnen ondersteunde nodepools wanneer capaciteit nodig of overbodig is.",
        "source": "https://learn.microsoft.com/en-us/azure/aks/what-is-aks"
      },
      {
        "id": "q079",
        "topic": "Azure Kubernetes Service",
        "prompt": "Hoe geef je een AKS-workload Azure-toegang zonder secrets in images?",
        "options": [
          "Een publieke database zonder authenticatie",
          "Een tenantbeheerderwachtwoord in de Dockerfile",
          "De SSH-sleutel van iedere node in een ConfigMap",
          "Microsoft Entra Workload ID met passende federatie en rechten"
        ],
        "answer": 3,
        "explanation": "Workload identity verbindt Kubernetes-serviceaccounts met Entra-identiteiten. Autorisatie op de doeldienst blijft expliciet nodig.",
        "source": "https://learn.microsoft.com/en-us/azure/aks/what-is-aks"
      },
      {
        "id": "q080",
        "topic": "Azure Kubernetes Service",
        "prompt": "Wat blijft jouw verantwoordelijkheid bij een beheerd AKS-cluster?",
        "options": [
          "De productie van Azure-servers",
          "Niets zodra het cluster bestaat",
          "Workloadbeveiliging, configuratie en een passend upgradebeleid",
          "De fysieke stroomvoorziening van Azure-datacenters"
        ],
        "answer": 2,
        "explanation": "Een beheerde control plane neemt niet alle platformtaken over. Beheer node- en Kubernetesversies, policies, images en workloadbeschikbaarheid.",
        "source": "https://learn.microsoft.com/en-us/azure/aks/what-is-aks"
      },
      {
        "id": "q081",
        "topic": "Azure Functions",
        "prompt": "Je wilt kortlopende verwerking starten bij een nieuw queuebericht. Welke dienst past?",
        "options": [
          "Een management-group-policy als runtime",
          "Private DNS-autoregistratie",
          "Azure Bastion met een RDP-sessie",
          "Azure Functions met een queue-trigger"
        ],
        "answer": 3,
        "explanation": "Functions past bij eventgedreven code met triggers en bindings. Kies een hostingplan dat past bij uitvoeringstijd, netwerk en schaalvereisten.",
        "source": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-overview"
      },
      {
        "id": "q082",
        "topic": "Azure Functions",
        "prompt": "Mag je ervan uitgaan dat een trigger een businessactie precies eenmaal uitvoert?",
        "options": [
          "Ja, Functions garandeert dit voor ieder extern systeem",
          "Nee, ontwerp idempotente verwerking voor mogelijke herlevering",
          "Ja, zodra de functie async is",
          "Alleen bij JavaScript is herlevering onmogelijk"
        ],
        "answer": 1,
        "explanation": "Retries en herleveringen kunnen dubbele verwerking veroorzaken. Gebruik businesssleutels, deduplicatie en consistente statusovergangen.",
        "source": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-overview"
      },
      {
        "id": "q083",
        "topic": "Azure Functions",
        "prompt": "Een proces wacht dagen op goedkeuring. Wat past beter dan één lang draaiende functie?",
        "options": [
          "Een oneindige lus in een HTTP-trigger",
          "Een groter logbestand",
          "Een browservenster permanent openhouden",
          "Durable Functions met duurzame orkestratie"
        ],
        "answer": 3,
        "explanation": "Durable Functions ondersteunt stateful orkestraties en wachten op externe events. Volg de regels voor deterministische orchestratorcode.",
        "source": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-overview"
      },
      {
        "id": "q084",
        "topic": "Azure Functions",
        "prompt": "Een HTTP-functie moet snel reageren ondanks lange verwerking. Welk patroon past?",
        "options": [
          "De volledige queue in één response meesturen",
          "De HTTP-verbinding onbeperkt openhouden",
          "Alle retries uitschakelen",
          "Werk accepteren, asynchroon verwerken en status beschikbaar maken"
        ],
        "answer": 3,
        "explanation": "Een asynchroon request-replypatroon voorkomt afhankelijkheid van lange HTTP-time-outs. De client krijgt een manier om voortgang op te vragen.",
        "source": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-overview"
      },
      {
        "id": "q085",
        "topic": "Azure Logic Apps",
        "prompt": "Een orderproces verbindt SaaS, goedkeuringen en bedrijfsapplicaties met connectors. Wat past?",
        "options": [
          "Azure Bastion",
          "Een region pair",
          "Azure Logic Apps",
          "Een NSG"
        ],
        "answer": 2,
        "explanation": "Logic Apps ondersteunt workflows en connectors voor integratie. Beoordeel connectorcapaciteit, authenticatie, kosten en netwerktoegang.",
        "source": "https://learn.microsoft.com/en-us/azure/logic-apps/logic-apps-overview"
      },
      {
        "id": "q086",
        "topic": "Azure Logic Apps",
        "prompt": "Waarop baseer je de keuze tussen Logic Apps Consumption en Standard?",
        "options": [
          "Dat Consumption geen triggers heeft",
          "Hosting-, netwerk-, isolatie- en kostenvereisten",
          "Alleen de lengte van de workflownaam",
          "Dat Standard altijd gratis is"
        ],
        "answer": 1,
        "explanation": "De hostingmodellen verschillen in uitvoering, kosten en mogelijkheden. Selecteer op workloadkenmerken in plaats van alleen productnamen.",
        "source": "https://learn.microsoft.com/en-us/azure/logic-apps/logic-apps-overview"
      },
      {
        "id": "q087",
        "topic": "Azure Logic Apps",
        "prompt": "Een externe API faalt tijdelijk tijdens een workflow. Wat ontwerp je?",
        "options": [
          "Alle fouten als succesvol markeren",
          "De hele subscription verwijderen",
          "Gerichte retries, time-outs en foutafhandeling met compensatie waar nodig",
          "Oneindige retries zonder monitoring"
        ],
        "answer": 2,
        "explanation": "Integratie kent tijdelijke en blijvende fouten. Beperk retries en maak operationeel herstel en eventuele compensatie expliciet.",
        "source": "https://learn.microsoft.com/en-us/azure/logic-apps/logic-apps-overview"
      },
      {
        "id": "q088",
        "topic": "Azure Logic Apps",
        "prompt": "Waarom is een connector geen garantie op onbeperkte doorvoer?",
        "options": [
          "Omdat connectors uitsluitend lokaal werken",
          "Connectors en achterliggende API’s hebben limieten en throttling",
          "Omdat een connector altijd één request per dag toestaat",
          "Omdat TLS alle parallelisme blokkeert"
        ],
        "answer": 1,
        "explanation": "Controleer connector- en API-limieten, concurrency en retrygedrag. Throttling beïnvloedt doorlooptijd en kosten.",
        "source": "https://learn.microsoft.com/en-us/azure/logic-apps/logic-apps-overview"
      }
    ]
  },
  {
    "id": "integration",
    "title": "05 · API’s, berichten & events",
    "description": "Scheid opdrachten, gebeurtenissen, streams en realtime interactie.",
    "questions": [
      {
        "id": "q089",
        "topic": "API Management",
        "prompt": "Je wilt API’s centraal publiceren met authenticatiebeleid en throttling. Wat past?",
        "options": [
          "Azure API Management",
          "Een resource lock",
          "Een Cosmos DB-back-up",
          "Azure Event Hubs als HTTP-gateway"
        ],
        "answer": 0,
        "explanation": "API Management biedt een gateway en beheer voor API’s. De backend blijft verantwoordelijk voor correcte businesslogica en autorisatie.",
        "source": "https://learn.microsoft.com/en-us/azure/api-management/api-management-key-concepts"
      },
      {
        "id": "q090",
        "topic": "API Management",
        "prompt": "Bewijst een APIM-subscription key de identiteit en rechten van een eindgebruiker?",
        "options": [
          "Ja, zolang de API HTTPS gebruikt",
          "Nee, gebruik passende tokenvalidatie en autorisatie",
          "Ja, de key bevat altijd de Entra-gebruikersrollen",
          "Alleen als de key in de URL staat"
        ],
        "answer": 1,
        "explanation": "Een subscription key identificeert een API-abonnement. Gebruik bijvoorbeeld OAuth/OIDC-tokens voor gebruikers- of applicatie-identiteit.",
        "source": "https://learn.microsoft.com/en-us/azure/api-management/api-management-key-concepts"
      },
      {
        "id": "q091",
        "topic": "API Management",
        "prompt": "Welke policyfunctie helpt een backend tegen te veel requests te beschermen?",
        "options": [
          "Een DNS-zone transfer",
          "Rate limiting",
          "Een storage-tierwijziging",
          "Een deployment slot swap"
        ],
        "answer": 1,
        "explanation": "Rate limits begrenzen requestfrequentie. Houd rekening met de specifieke policy, gedistribueerde tellers en het gewenste foutgedrag.",
        "source": "https://learn.microsoft.com/en-us/azure/api-management/api-management-key-concepts"
      },
      {
        "id": "q092",
        "topic": "API Management",
        "prompt": "Is APIM automatisch een duurzame berichtenbuffer wanneer de backend uitvalt?",
        "options": [
          "Alleen bij een GET-request",
          "Nee, gebruik een geschikte broker voor duurzame asynchrone verwerking",
          "Ja, iedere request blijft onbeperkt opgeslagen",
          "Ja, als caching actief is"
        ],
        "answer": 1,
        "explanation": "Een API-gateway en een broker lossen andere problemen op. Combineer APIM met bijvoorbeeld Service Bus als opdrachten duurzaam moeten wachten.",
        "source": "https://learn.microsoft.com/en-us/azure/api-management/api-management-key-concepts"
      },
      {
        "id": "q093",
        "topic": "Azure Service Bus",
        "prompt": "Welke dienst past bij betrouwbare zakelijke opdrachten met dead-letterafhandeling?",
        "options": [
          "Azure Front Door",
          "Azure Monitor Metrics",
          "Azure Service Bus",
          "Azure Private DNS"
        ],
        "answer": 2,
        "explanation": "Service Bus is een enterprise-messagebroker met queues en topics. Het ondersteunt patronen voor betrouwbare asynchrone bedrijfsprocessen.",
        "source": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-overview"
      },
      {
        "id": "q094",
        "topic": "Azure Service Bus",
        "prompt": "Meerdere afdelingen moeten elk een eigen kopie van een orderbericht verwerken. Wat past?",
        "options": [
          "Eén DNS-record per afdeling",
          "Eén queue met concurrerende consumers",
          "Eén gedeeld lock op een blob",
          "Een topic met afzonderlijke subscriptions"
        ],
        "answer": 3,
        "explanation": "Topic subscriptions krijgen elk hun eigen berichtenstroom, eventueel gefilterd. Consumers van één queue concurreren juist om berichten.",
        "source": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-overview"
      },
      {
        "id": "q095",
        "topic": "Azure Service Bus",
        "prompt": "Je moet berichten per order in volgorde verwerken. Welke functie onderzoek je?",
        "options": [
          "Een langere DNS-TTL",
          "Sessions met een ordergebonden SessionId",
          "Een publieke endpointnaam",
          "Willekeurige MessageId’s zonder verdere inrichting"
        ],
        "answer": 1,
        "explanation": "Sessions maken geordende verwerking van gerelateerde berichten mogelijk. De producer en consumer moeten consequent dezelfde groepering gebruiken.",
        "source": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-overview"
      },
      {
        "id": "q096",
        "topic": "Azure Service Bus",
        "prompt": "Een bericht blijft door een inhoudelijke fout mislukken. Wat is passend?",
        "options": [
          "Het bericht eindeloos zonder vertraging herhalen",
          "Alle andere orders blokkeren totdat iemand inlogt",
          "Dead-letterafhandeling met diagnose en gecontroleerd opnieuw aanbieden",
          "De fout stilzwijgend als succes opslaan"
        ],
        "answer": 2,
        "explanation": "Een dead-letterqueue is een plek voor problematische berichten. Richt monitoring, oorzaakonderzoek en herstelprocedures in.",
        "source": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-overview"
      },
      {
        "id": "q097",
        "topic": "Azure Event Hubs",
        "prompt": "Miljoenen telemetrie-events van voertuigen moeten als stream worden ingenomen. Wat past?",
        "options": [
          "Azure Event Hubs",
          "Azure Bastion",
          "Een management group",
          "Azure App Configuration als berichtenbroker"
        ],
        "answer": 0,
        "explanation": "Event Hubs is ontworpen voor grootschalige eventstreaming. Het is geen vervanging voor alle enterprise-queuefuncties van Service Bus.",
        "source": "https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-about"
      },
      {
        "id": "q098",
        "topic": "Azure Event Hubs",
        "prompt": "Waarom hebben analytics en anomaliedetectie elk een eigen consumer group nodig?",
        "options": [
          "Om ieder event automatisch te verwijderen",
          "Om alle events globaal te sorteren",
          "Om onafhankelijk hun eigen leespositie te beheren",
          "Om dezelfde compute-identiteit verplicht te delen"
        ],
        "answer": 2,
        "explanation": "Consumer groups bieden onafhankelijke views op de stream. Iedere toepassing beheert haar verwerking en checkpoints.",
        "source": "https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-about"
      },
      {
        "id": "q099",
        "topic": "Azure Event Hubs",
        "prompt": "Welke volgordegarantie is relevant voor Event Hubs?",
        "options": [
          "Geen enkele volgorde binnen een partitie",
          "Altijd volgorde per subscriptionfactuur",
          "Eén globale volgorde over alle partities",
          "Volgorde binnen een partitie"
        ],
        "answer": 3,
        "explanation": "Kies een partitiesleutel wanneer gerelateerde events samen moeten blijven. Globale ordering beperkt schaalbaarheid en wordt niet algemeen geboden.",
        "source": "https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-about"
      },
      {
        "id": "q100",
        "topic": "Azure Event Hubs",
        "prompt": "Wat doet een checkpoint bij een consumer?",
        "options": [
          "Een Azure-regio uitschakelen",
          "De producent verplicht stoppen",
          "De verwerkingspositie vastleggen voor hervatten",
          "Het event direct uit alle partities verwijderen"
        ],
        "answer": 2,
        "explanation": "Checkpoints ondersteunen hervatten na een onderbreking. Houd rekening met herverwerking en maak consumers idempotent waar nodig.",
        "source": "https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-about"
      },
      {
        "id": "q101",
        "topic": "Azure Event Grid",
        "prompt": "Een nieuwe blob moet downstreamverwerking activeren. Welke routeringsdienst past?",
        "options": [
          "Azure Event Grid",
          "Azure Private DNS",
          "Azure Bastion",
          "Azure SQL elastic pools"
        ],
        "answer": 0,
        "explanation": "Event Grid routeert gebeurtenissen van bronnen naar handlers. Een gebeurtenis meldt doorgaans dat iets is gebeurd.",
        "source": "https://learn.microsoft.com/en-us/azure/event-grid/overview"
      },
      {
        "id": "q102",
        "topic": "Azure Event Grid",
        "prompt": "Mag een Event Grid-handler aannemen dat events altijd exact eenmaal en op volgorde aankomen?",
        "options": [
          "Alleen als de handler een VM is",
          "Ja, als de payload JSON is",
          "Ja, voor iedere eventbron en ieder protocol",
          "Nee, ontwerp voor mogelijke duplicaten en afwijkende volgorde"
        ],
        "answer": 3,
        "explanation": "De afleveringssemantiek vereist robuuste handlers. Verwerk duplicaten veilig en baseer correcte status niet uitsluitend op aankomstvolgorde.",
        "source": "https://learn.microsoft.com/en-us/azure/event-grid/overview"
      },
      {
        "id": "q103",
        "topic": "Azure Event Grid",
        "prompt": "Je wilt alleen blob-created-events voor een specifieke container ontvangen. Wat gebruik je?",
        "options": [
          "Event-subscriptionfilters",
          "Een extra Entra-tenant",
          "Een database-index",
          "Een ExpressRoute-circuit"
        ],
        "answer": 0,
        "explanation": "Filters beperken welke events bij een subscription terechtkomen. Dit voorkomt onnodige verwerking en vereenvoudigt handlers.",
        "source": "https://learn.microsoft.com/en-us/azure/event-grid/overview"
      },
      {
        "id": "q104",
        "topic": "Azure Event Grid",
        "prompt": "Een handler kan events langdurig niet ontvangen. Wat ontwerp je?",
        "options": [
          "Uitsluitend een browserrefresh",
          "Alleen een andere resourcenaam",
          "Retries en waar ondersteund dead-lettering plus operationeel herstel",
          "De veronderstelling dat events eeuwig blijven bestaan"
        ],
        "answer": 2,
        "explanation": "Bezorgbeleid kent grenzen. Controleer TTL, retrybeleid en dead-letterconfiguratie voor het gebruikte Event Grid-model.",
        "source": "https://learn.microsoft.com/en-us/azure/event-grid/overview"
      },
      {
        "id": "q105",
        "topic": "Azure SignalR Service",
        "prompt": "Een productiedashboard moet direct updates naar veel browsers sturen. Wat past?",
        "options": [
          "Azure Management Groups",
          "Een VPN Gateway als message hub",
          "Azure SignalR Service",
          "Een storage-archivetier"
        ],
        "answer": 2,
        "explanation": "SignalR Service beheert realtime clientverbindingen. De applicatie bepaalt welke updates naar welke clients of groepen mogen.",
        "source": "https://learn.microsoft.com/en-us/azure/azure-signalr/signalr-overview"
      },
      {
        "id": "q106",
        "topic": "Azure SignalR Service",
        "prompt": "Is SignalR een duurzame auditopslag voor alle productie-events?",
        "options": [
          "Alleen in dezelfde regio",
          "Ja, als WebSockets worden gebruikt",
          "Ja, alle berichten blijven onbeperkt bewaard",
          "Nee, bewaar auditdata in een daarvoor geschikte opslagdienst"
        ],
        "answer": 3,
        "explanation": "Realtime levering vervangt geen duurzaam log of eventstore. Clients kunnen disconnecten; ontwerp herstel en synchronisatie.",
        "source": "https://learn.microsoft.com/en-us/azure/azure-signalr/signalr-overview"
      },
      {
        "id": "q107",
        "topic": "Azure SignalR Service",
        "prompt": "Wie moet bepalen of een gebruiker updates voor fabriek A mag ontvangen?",
        "options": [
          "Iedere browser zelf zonder servercontrole",
          "De DNS-TTL van de hub",
          "De applicatie via authenticatie en autorisatie",
          "Alleen de naam van de SignalR-groep"
        ],
        "answer": 2,
        "explanation": "Een groepsnaam is geen beveiligingsgrens op zichzelf. Controleer server-side wie aan groepen mag deelnemen en wat verzonden wordt.",
        "source": "https://learn.microsoft.com/en-us/azure/azure-signalr/signalr-overview"
      },
      {
        "id": "q108",
        "topic": "Azure SignalR Service",
        "prompt": "Wat is een belangrijk voordeel van een beheerde SignalR-dienst?",
        "options": [
          "Alle businesslogica automatisch genereren",
          "Iedere client altijd online houden",
          "Alle databases overbodig maken",
          "De verbindingslaag onafhankelijk van appservers laten schalen"
        ],
        "answer": 3,
        "explanation": "De dienst ontlast appservers van veel persistente verbindingen. Capaciteit, kosten en reconnectgedrag blijven ontwerpkeuzes.",
        "source": "https://learn.microsoft.com/en-us/azure/azure-signalr/signalr-overview"
      }
    ]
  },
  {
    "id": "data",
    "title": "06 · Data & geheimen",
    "description": "Kies opslag op toegangspatroon, consistentie, herstel en beveiliging.",
    "questions": [
      {
        "id": "q109",
        "topic": "Azure Storage",
        "prompt": "Waar sla je grote aantallen afbeeldingen en diagnoserapporten als objecten op?",
        "options": [
          "Azure Bastion",
          "Azure Private DNS",
          "Azure Blob Storage",
          "Een management-group-policy"
        ],
        "answer": 2,
        "explanation": "Blob Storage is objectopslag. Relationele queries en transacties vragen vaak een andere datadienst.",
        "source": "https://learn.microsoft.com/en-us/azure/storage/common/storage-introduction"
      },
      {
        "id": "q110",
        "topic": "Azure Storage",
        "prompt": "Een partner mag één blob tijdelijk lezen. Wat past bij ondersteunde Entra-authenticatie?",
        "options": [
          "Een Global Administrator-account delen",
          "Een beperkt geldige user delegation SAS met minimale rechten",
          "De hele container anoniem toegankelijk maken",
          "De accountsleutel permanent publiceren"
        ],
        "answer": 1,
        "explanation": "Een SAS kan toegang in tijd en scope begrenzen. User delegation SAS gebruikt Entra-credentials en vermijdt het delen van accountsleutels.",
        "source": "https://learn.microsoft.com/en-us/azure/storage/common/storage-introduction"
      },
      {
        "id": "q111",
        "topic": "Azure Storage",
        "prompt": "Waartegen beschermt zone-redundante opslag primair?",
        "options": [
          "Iedere uitval van alle regio’s wereldwijd",
          "Iedere logische verwijdering door een bevoegde gebruiker",
          "Uitval van een availability zone binnen de primaire regio",
          "Alle applicatiebugs"
        ],
        "answer": 2,
        "explanation": "ZRS repliceert over zones binnen een regio. Geografische uitval en herstel van verwijderingen vereisen aanvullende maatregelen.",
        "source": "https://learn.microsoft.com/en-us/azure/storage/common/storage-introduction"
      },
      {
        "id": "q112",
        "topic": "Azure Storage",
        "prompt": "Zelden gebruikte documenten moeten goedkoop bewaard blijven, met uren herstelruimte. Wat onderzoek je?",
        "options": [
          "Altijd de duurste hot-tier",
          "Een SignalR-groep",
          "Archive-tier met retrievaltijd, kosten en bewaarbeperkingen",
          "Een NSG als opslagplaats"
        ],
        "answer": 2,
        "explanation": "Archive kan kosten verlagen maar data moet worden gerehydrateerd voor gebruik. Controleer ondersteunde account- en redundantieconfiguraties.",
        "source": "https://learn.microsoft.com/en-us/azure/storage/common/storage-introduction"
      },
      {
        "id": "q113",
        "topic": "Azure Cosmos DB",
        "prompt": "Een wereldwijd gebruikte catalogus heeft flexibele documenten en lage latency nodig. Wat onderzoek je?",
        "options": [
          "Azure DNS als database",
          "Azure Bastion",
          "Een Service Bus-dead-letterqueue als catalogus",
          "Azure Cosmos DB met passende API, partities en regio’s"
        ],
        "answer": 3,
        "explanation": "Cosmos DB is een gedistribueerde databasedienst. De juiste API, partitiesleutel, consistentie en kosten zijn bepalend voor geschiktheid.",
        "source": "https://learn.microsoft.com/en-us/azure/cosmos-db/overview"
      },
      {
        "id": "q114",
        "topic": "Azure Cosmos DB",
        "prompt": "Waarom is de partitiesleutel in Cosmos DB cruciaal?",
        "options": [
          "Ze vervangt ieder toegangsbeleid",
          "Ze schakelt automatisch alle indexen uit",
          "Ze bepaalt uitsluitend de portalweergavenaam",
          "Ze beïnvloedt verdeling, schaalbaarheid en querykosten"
        ],
        "answer": 3,
        "explanation": "Een slechte sleutel kan hot partitions en dure cross-partitionqueries veroorzaken. Baseer de keuze op volumes en toegangspatronen.",
        "source": "https://learn.microsoft.com/en-us/azure/cosmos-db/overview"
      },
      {
        "id": "q115",
        "topic": "Azure Cosmos DB",
        "prompt": "Een client moet zijn eigen zojuist geschreven data consistent terugzien. Welk niveau past vaak?",
        "options": [
          "Eventual consistency zonder verdere garanties",
          "Een DNS-TTL van nul",
          "Geen consistency-instelling",
          "Session consistency met correct sessiegebruik"
        ],
        "answer": 3,
        "explanation": "Session consistency biedt garanties binnen een clientsessie. Multi-client- en multi-regioscenario’s kunnen aanvullende afwegingen vragen.",
        "source": "https://learn.microsoft.com/en-us/azure/cosmos-db/overview"
      },
      {
        "id": "q116",
        "topic": "Azure Cosmos DB",
        "prompt": "Wat drukken Request Units uit?",
        "options": [
          "De HTTP-versie van een client",
          "Genormaliseerd resourceverbruik van databasebewerkingen",
          "Het aantal Entra-tenants",
          "De fysieke grootte van een availability zone"
        ],
        "answer": 1,
        "explanation": "RU-kosten hangen onder meer af van bewerking, datagrootte, indexen en consistentie. Meet representatieve queries voor capaciteitsplanning.",
        "source": "https://learn.microsoft.com/en-us/azure/cosmos-db/overview"
      },
      {
        "id": "q117",
        "topic": "Azure SQL",
        "prompt": "Een orderadministratie heeft relationele transacties en SQL-queries nodig. Wat past?",
        "options": [
          "Azure SQL Database",
          "Azure Private Link als query-engine",
          "Azure SignalR Service als database",
          "Azure Front Door"
        ],
        "answer": 0,
        "explanation": "Azure SQL Database is beheerde relationele opslag. Beoordeel compatibiliteit, prestatieniveau, netwerktoegang en continuïteitseisen.",
        "source": "https://learn.microsoft.com/en-us/azure/azure-sql/database/sql-database-paas-overview"
      },
      {
        "id": "q118",
        "topic": "Azure SQL",
        "prompt": "Een bestaande SQL Server-app vereist brede instancecompatibiliteit. Welke PaaS-optie onderzoek je?",
        "options": [
          "Azure SQL Managed Instance",
          "Een storage static website",
          "Een management group",
          "Een Event Grid-topic"
        ],
        "answer": 0,
        "explanation": "Managed Instance biedt brede SQL Server-instancecompatibiliteit. Beoordeel vereiste features; volledige gelijkheid met on-premises is geen aanname.",
        "source": "https://learn.microsoft.com/en-us/azure/azure-sql/database/sql-database-paas-overview"
      },
      {
        "id": "q119",
        "topic": "Azure SQL",
        "prompt": "Veel kleine databases hebben wisselende, niet-gelijktijdige pieken. Wat kan kostenefficiënt zijn?",
        "options": [
          "Alle databases anoniem maken",
          "Een elastic pool met passend gedeeld budget",
          "Iedere database permanent maximaal dimensioneren",
          "Een Front Door-rule set als databasepool"
        ],
        "answer": 1,
        "explanation": "Elastic pools delen resources tussen databases. Monitor onderlinge concurrentie en stel passende limieten in.",
        "source": "https://learn.microsoft.com/en-us/azure/azure-sql/database/sql-database-paas-overview"
      },
      {
        "id": "q120",
        "topic": "Azure SQL",
        "prompt": "Een tabel is per ongeluk verwijderd. Welke mogelijkheid onderzoek je?",
        "options": [
          "Een hogere WAF-score",
          "Alleen geo-replicatie zonder historische herstelpunten",
          "Point-in-time restore binnen de beschikbare retentie",
          "Een nieuwe DNS-alias"
        ],
        "answer": 2,
        "explanation": "Herstel naar een eerder tijdstip kan logische fouten terugdraaien, vaak via een nieuwe database. Retentie en herstelprocedure moeten vooraf bekend zijn.",
        "source": "https://learn.microsoft.com/en-us/azure/azure-sql/database/sql-database-paas-overview"
      },
      {
        "id": "q121",
        "topic": "Azure Key Vault",
        "prompt": "Waar bewaar je applicatiegeheimen, sleutels en certificaten centraal?",
        "options": [
          "Een resource-tag met het wachtwoord",
          "Een publiek JavaScript-bestand",
          "Een openbare Git-commit",
          "Azure Key Vault"
        ],
        "answer": 3,
        "explanation": "Key Vault is bedoeld voor geheimen en cryptografisch materiaal. Geef applicaties alleen de noodzakelijke toegang.",
        "source": "https://learn.microsoft.com/en-us/azure/key-vault/general/overview"
      },
      {
        "id": "q122",
        "topic": "Azure Key Vault",
        "prompt": "Hoe leest een Azure-workload bij voorkeur een secret zonder bootstrapwachtwoord?",
        "options": [
          "Met managed identity en passende Key Vault-rechten",
          "Via een anonieme HTTP-request",
          "Via een SAS-token voor een willekeurige blob",
          "Met een hardcoded tenantbeheerderwachtwoord"
        ],
        "answer": 0,
        "explanation": "Managed identity vermijdt een apart opgeslagen authenticatiegeheim. Autorisatie en netwerktoegang tot Key Vault blijven nodig.",
        "source": "https://learn.microsoft.com/en-us/azure/key-vault/general/overview"
      },
      {
        "id": "q123",
        "topic": "Azure Key Vault",
        "prompt": "Wat helpen soft delete en purge protection voorkomen?",
        "options": [
          "Onherstelbaar verlies door directe verwijdering en purge",
          "Iedere mogelijke plaintextlek in appcode",
          "Alle netwerkstoringen",
          "Het verlopen van ieder certificaat"
        ],
        "answer": 0,
        "explanation": "Deze functies beschermen tegen ongewenste definitieve verwijdering. Ze vervangen geen juiste rechten, rotatie en veilige verwerking in de app.",
        "source": "https://learn.microsoft.com/en-us/azure/key-vault/general/overview"
      },
      {
        "id": "q124",
        "topic": "Azure Key Vault",
        "prompt": "Een app haalt hetzelfde secret bij iedere request op. Wat is een betere afweging?",
        "options": [
          "Key Vault publiek zonder authenticatie maken",
          "Veilig cachen met een strategie voor rotatie en vernieuwing",
          "Secretrotatie permanent uitschakelen",
          "Alle secrets in browser-localStorage opslaan"
        ],
        "answer": 1,
        "explanation": "Onnodige calls verhogen latency en risico op throttling. Ontwerp caching zonder nieuwe versies en rotatie te negeren.",
        "source": "https://learn.microsoft.com/en-us/azure/key-vault/general/overview"
      }
    ]
  },
  {
    "id": "ai",
    "title": "07 · Zoeken & generatieve AI",
    "description": "Verbind modellen met beheerde kennis, evaluaties en expliciete datagrenzen.",
    "questions": [
      {
        "id": "q125",
        "topic": "Azure AI Search",
        "prompt": "Je wilt werkinstructies doorzoekbaar maken met tekst- en vectorzoekopdrachten. Wat past?",
        "options": [
          "Azure AI Search",
          "Een NSG",
          "Azure Bastion",
          "Een management group"
        ],
        "answer": 0,
        "explanation": "AI Search is een zoekdienst met indexen en tekst-, vector- en hybride zoekmogelijkheden. Brondata en ingestie moeten worden ontworpen.",
        "source": "https://learn.microsoft.com/en-us/azure/search/search-what-is-azure-search"
      },
      {
        "id": "q126",
        "topic": "Azure AI Search",
        "prompt": "Wat combineert hybrid search?",
        "options": [
          "Full-text- en vectorzoekresultaten",
          "RDP- en SSH-sessies",
          "SQL-back-ups en DNS-zones",
          "Twee Azure-facturen"
        ],
        "answer": 0,
        "explanation": "Hybride zoeken combineert lexicale en semantische nabijheid. Relevantie hangt af van content, embeddings en queryontwerp.",
        "source": "https://learn.microsoft.com/en-us/azure/search/search-what-is-azure-search"
      },
      {
        "id": "q127",
        "topic": "Azure AI Search",
        "prompt": "Garandeert een zoekindex vanzelf dat medewerkers alleen toegestane documenten vinden?",
        "options": [
          "Alleen wanneer de indexnaam geheim is",
          "Ja, als de documenten embeddings hebben",
          "Nee, ontwerp toegangsfilters en beveiliging van bron tot antwoord",
          "Ja, de index leest automatisch alle bedrijfsrollen"
        ],
        "answer": 2,
        "explanation": "Zoekautorisatie is een expliciete verantwoordelijkheid. Onjuiste filtering kan via resultaten en RAG-antwoorden gevoelige inhoud lekken.",
        "source": "https://learn.microsoft.com/en-us/azure/search/search-what-is-azure-search"
      },
      {
        "id": "q128",
        "topic": "Azure AI Search",
        "prompt": "Waarom moet de indexverversing in een ADR staan?",
        "options": [
          "Een index vervangt altijd de brondatabase",
          "Indexers verwijderen alle oude documenten automatisch zonder configuratie",
          "Zoekresultaten kunnen achterlopen op gewijzigde brondata",
          "Embeddings worden wereldwijd vanzelf bijgewerkt"
        ],
        "answer": 2,
        "explanation": "Ontwerp ingestie, wijzigingen en deleties met een gewenste versheid. Controleer welke change- en deletion-detection het bronpad ondersteunt.",
        "source": "https://learn.microsoft.com/en-us/azure/search/search-what-is-azure-search"
      },
      {
        "id": "q129",
        "topic": "Azure AI Foundry / Microsoft Foundry",
        "prompt": "Waarvoor gebruik je Foundry in een AI-platform?",
        "options": [
          "VNet-pakketten routeren als firewall",
          "AI-apps, modellen en agents ontwikkelen, evalueren en beheren",
          "Azure-subscriptions factureren",
          "RDP-sessies naar productie-VM’s openen"
        ],
        "answer": 1,
        "explanation": "Foundry bundelt mogelijkheden voor de AI-ontwikkelcyclus. Benaming en beschikbare functies kunnen per portalervaring en regio verschillen.",
        "source": "https://learn.microsoft.com/en-us/azure/ai-foundry/what-is-azure-ai-foundry"
      },
      {
        "id": "q130",
        "topic": "Azure AI Foundry / Microsoft Foundry",
        "prompt": "Een demoagent werkt bij vijf prompts. Wat is nodig voor productie?",
        "options": [
          "Alleen een fraaiere chatinterface",
          "Geen verdere controle als de demo slaagt",
          "Alleen een grotere modelnaam",
          "Representatieve evaluaties voor kwaliteit, veiligheid, kosten en latency"
        ],
        "answer": 3,
        "explanation": "Een kleine demo bewijst geen betrouwbaarheid. Gebruik datasets, meetbare criteria en monitoring passend bij het bedrijfsrisico.",
        "source": "https://learn.microsoft.com/en-us/azure/ai-foundry/what-is-azure-ai-foundry"
      },
      {
        "id": "q131",
        "topic": "Azure AI Foundry / Microsoft Foundry",
        "prompt": "Een agent mag onderhoudstickets aanmaken. Wat ontwerp je rond zijn tools?",
        "options": [
          "Alleen een instructie om voorzichtig te zijn",
          "Een gedeeld database-rootwachtwoord in de prompt",
          "Onbeperkte tenantbeheerrechten voor gemak",
          "Minimale rechten, inputvalidatie en bevestiging voor risicovolle acties"
        ],
        "answer": 3,
        "explanation": "Agenttools voeren echte acties uit. Autorisatie en controle horen buiten uitsluitend de modelinstructies te worden afgedwongen.",
        "source": "https://learn.microsoft.com/en-us/azure/ai-foundry/what-is-azure-ai-foundry"
      },
      {
        "id": "q132",
        "topic": "Azure AI Foundry / Microsoft Foundry",
        "prompt": "Waarom toets je model- en regioondersteuning vóór platformkeuze?",
        "options": [
          "Een foundryproject verwijdert alle quota",
          "De regio beïnvloedt alleen de interfacekleur",
          "Iedere combinatie is altijd in elke regio beschikbaar",
          "Beschikbaarheid, quota en dataverwerking verschillen per model en deployment"
        ],
        "answer": 3,
        "explanation": "Controleer actuele productvoorwaarden en inzetmogelijkheden. Een gevonden model is niet automatisch in de gewenste configuratie inzetbaar.",
        "source": "https://learn.microsoft.com/en-us/azure/ai-foundry/what-is-azure-ai-foundry"
      },
      {
        "id": "q133",
        "topic": "Azure OpenAI",
        "prompt": "Een assistent moet actuele interne handleidingen gebruiken. Welk patroon past?",
        "options": [
          "Uitsluitend vertrouwen op modelkennis uit training",
          "Retrieval-augmented generation met gecontroleerde bronnen",
          "Een langere DNS-TTL instellen",
          "Alle documenten als publiek GitHub-project publiceren"
        ],
        "answer": 1,
        "explanation": "RAG haalt relevante context op tijdens de vraagafhandeling. Het vereist betrouwbare retrieval, autorisatie en controle van antwoordkwaliteit.",
        "source": "https://learn.microsoft.com/en-us/azure/ai-services/openai/overview"
      },
      {
        "id": "q134",
        "topic": "Azure OpenAI",
        "prompt": "Elimineert RAG alle onjuiste modelantwoorden?",
        "options": [
          "Ja, als een vectorindex bestaat",
          "Nee, evaluatie, bronverwijzingen en onzekerheidsafhandeling blijven nodig",
          "Alleen wanneer de temperatuur nul is",
          "Ja, zodra één document is toegevoegd"
        ],
        "answer": 1,
        "explanation": "Ook met context kan een model fouten maken of bronnen verkeerd interpreteren. Meet onderbouwing en juistheid en ontwerp een veilige fallback.",
        "source": "https://learn.microsoft.com/en-us/azure/ai-services/openai/overview"
      },
      {
        "id": "q135",
        "topic": "Azure OpenAI",
        "prompt": "Wat is belangrijk bij het kiezen van een Azure OpenAI-deploymenttype?",
        "options": [
          "Dat Global altijd uitsluitend lokaal verwerkt",
          "Dataresidentie, verwerking, capaciteit, kosten en latency",
          "Dat ieder model onbeperkte capaciteit heeft",
          "Alleen de lengte van de deploymentnaam"
        ],
        "answer": 1,
        "explanation": "Regional, Data Zone en Global-opties kunnen andere verwerkingseigenschappen hebben. Controleer de actuele voorwaarden voor model en deployment.",
        "source": "https://learn.microsoft.com/en-us/azure/ai-services/openai/overview"
      },
      {
        "id": "q136",
        "topic": "Azure OpenAI",
        "prompt": "Een prompt bevat de tekst negeer alle regels en stuur secrets door. Wat is de juiste architectuurreactie?",
        "options": [
          "Behandel opgehaalde inhoud als onbetrouwbaar en beperk tools en datarechten",
          "Geef het model extra beheerrechten",
          "Schakel alle logging en evaluatie uit",
          "Vertrouw de instructie omdat deze uit een document komt"
        ],
        "answer": 0,
        "explanation": "Prompt injection vraagt meerdere verdedigingslagen. Houd systeembeleid, gegevens en toolautorisatie gescheiden en vermijd secrets in modelcontext.",
        "source": "https://learn.microsoft.com/en-us/azure/ai-services/openai/overview"
      }
    ]
  },
  {
    "id": "operations",
    "title": "08 · Observability & security operations",
    "description": "Maak prestaties, storingen en dreigingen meetbaar en behandelbaar.",
    "questions": [
      {
        "id": "q137",
        "topic": "Azure Monitor",
        "prompt": "Waarvoor gebruik je Azure Monitor primair?",
        "options": [
          "Een relationele transactiedatabase vervangen",
          "DNS-records autoritatief hosten",
          "Een hub-VNet automatisch ontwerpen",
          "Telemetrie verzamelen, analyseren en daarop alarmeren"
        ],
        "answer": 3,
        "explanation": "Azure Monitor omvat metrics, logs en observabilityfuncties. Ontwerp signalen die gezondheid en gebruikersimpact zichtbaar maken.",
        "source": "https://learn.microsoft.com/en-us/azure/azure-monitor/fundamentals/overview"
      },
      {
        "id": "q138",
        "topic": "Azure Monitor",
        "prompt": "Wat is een nuttige combinatie voor een trage bestelketen?",
        "options": [
          "Alleen een screenshot van de portal",
          "Metrics, gecorreleerde traces en relevante logs",
          "Alleen het aantal resource-tags",
          "Alleen de maandfactuur"
        ],
        "answer": 1,
        "explanation": "Metrics tonen trends, traces tonen de requestketen en logs geven context. Correlatie maakt oorzaakanalyse beter mogelijk.",
        "source": "https://learn.microsoft.com/en-us/azure/azure-monitor/fundamentals/overview"
      },
      {
        "id": "q139",
        "topic": "Azure Monitor",
        "prompt": "Een alert moet een operationele actie starten. Welke Azure Monitor-component past?",
        "options": [
          "Een action group",
          "Een management group",
          "Een Entra-administrative unit",
          "Een origin group"
        ],
        "answer": 0,
        "explanation": "Action groups definiëren notificaties en acties. Test de ontvangers en automatisering en voorkom meldingen zonder handelingsperspectief.",
        "source": "https://learn.microsoft.com/en-us/azure/azure-monitor/fundamentals/overview"
      },
      {
        "id": "q140",
        "topic": "Azure Monitor",
        "prompt": "Welke alert is meestal waardevoller voor een gebruikersgerichte SLO?",
        "options": [
          "Iedere wijziging in een resourcenaam",
          "Een aanhoudende stijging van mislukte kritieke transacties",
          "Iedere succesvolle health probe",
          "Ieder CPU-piekje van één seconde zonder context"
        ],
        "answer": 1,
        "explanation": "Alarmeer op relevante gebruikersimpact en bruikbare signalen. Combineer drempels en vensters zodat incidenten zichtbaar zijn zonder overmatige ruis.",
        "source": "https://learn.microsoft.com/en-us/azure/azure-monitor/fundamentals/overview"
      },
      {
        "id": "q141",
        "topic": "Log Analytics",
        "prompt": "Welke taal gebruik je normaal voor queries op Azure Monitor Logs?",
        "options": [
          "CSS",
          "Bicep uitsluitend als querytaal",
          "DNS zone syntax",
          "Kusto Query Language (KQL)"
        ],
        "answer": 3,
        "explanation": "KQL ondersteunt filteren, aggregeren en correleren van loggegevens. De beschikbare tabellen hangen af van de aangesloten bronnen.",
        "source": "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-overview"
      },
      {
        "id": "q142",
        "topic": "Log Analytics",
        "prompt": "Welke KQL-bewerking gebruik je om aantallen per categorie te aggregeren?",
        "options": [
          "project uitsluitend zonder groepering",
          "render als verplichte dataverwijdering",
          "summarize count() by categorie",
          "order by alleen zonder aggregatie"
        ],
        "answer": 2,
        "explanation": "summarize berekent aggregaties per groep. Filter bij grote datasets eerst zo gericht mogelijk op bijvoorbeeld tijd en relevante records.",
        "source": "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-overview"
      },
      {
        "id": "q143",
        "topic": "Log Analytics",
        "prompt": "Waarom kies je logretentie bewust?",
        "options": [
          "Kosten, compliance en onderzoekshorizon moeten in balans zijn",
          "Omdat logs automatisch alle secrets anonimiseren",
          "Omdat retentie applicatieautorisatie vervangt",
          "Omdat onbeperkte retentie altijd gratis is"
        ],
        "answer": 0,
        "explanation": "Bepaal welke gegevens nodig zijn, hoe lang en in welk opslagmodel. Vermijd onnodige persoonsgegevens en secrets in logs.",
        "source": "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-overview"
      },
      {
        "id": "q144",
        "topic": "Log Analytics",
        "prompt": "Moet elke resource automatisch in één gezamenlijke workspace loggen?",
        "options": [
          "Nee, weeg toegang, regio, kosten en operationele correlatie af",
          "Nee, ieder logrecord vereist een eigen workspace",
          "Alleen de resourcenaam bepaalt dit",
          "Ja, Azure ondersteunt maar één workspace per tenant"
        ],
        "answer": 0,
        "explanation": "Workspaceontwerp is een architectuurkeuze. Centralisatie helpt correlatie, maar toegangs- en dataresidentiegrenzen kunnen scheiding rechtvaardigen.",
        "source": "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-overview"
      },
      {
        "id": "q145",
        "topic": "Microsoft Sentinel",
        "prompt": "Wat is Microsoft Sentinel?",
        "options": [
          "Een relationele database",
          "Een Kubernetes-containerregistry",
          "Een wereldwijde DNS-provider",
          "Een cloudgebaseerde SIEM- en SOAR-oplossing"
        ],
        "answer": 3,
        "explanation": "Sentinel ondersteunt securityanalyse, detectie, onderzoek en geautomatiseerde respons. Het bouwt op aangesloten beveiligings- en logbronnen.",
        "source": "https://learn.microsoft.com/en-us/azure/sentinel/overview"
      },
      {
        "id": "q146",
        "topic": "Microsoft Sentinel",
        "prompt": "Hoe komen relevante securitygegevens in Sentinel?",
        "options": [
          "Via passende data connectors en ingestieconfiguratie",
          "Automatisch uit iedere denkbare dienst zonder inrichting",
          "Door management groups te hernoemen",
          "Via alleen een Front Door-cache"
        ],
        "answer": 0,
        "explanation": "Connectoren ontsluiten bronnen. Beschikbaarheid, rechten, kosten en datakwaliteit bepalen of detecties bruikbaar zijn.",
        "source": "https://learn.microsoft.com/en-us/azure/sentinel/overview"
      },
      {
        "id": "q147",
        "topic": "Microsoft Sentinel",
        "prompt": "Wat is het doel van een analytics rule?",
        "options": [
          "Een SQL-schema migreren",
          "Een TLS-certificaat uitgeven",
          "Een VNet-subnet uitbreiden",
          "Verdachte patronen herkennen en waar geconfigureerd alerts en incidenten maken"
        ],
        "answer": 3,
        "explanation": "Analytics rules zetten securitylogica om in detecties. Tuning, relevante data en het verminderen van false positives blijven nodig.",
        "source": "https://learn.microsoft.com/en-us/azure/sentinel/overview"
      },
      {
        "id": "q148",
        "topic": "Microsoft Sentinel",
        "prompt": "Een bevestigd incident moet geautomatiseerde respons starten. Welke combinatie past?",
        "options": [
          "Een storage lifecycle-rule als SIEM",
          "Een App Service-slot zonder workflow",
          "Een DNS-TTL van één seconde",
          "Automation rules en playbooks op basis van Logic Apps"
        ],
        "answer": 3,
        "explanation": "Sentinel kan incidentafhandeling automatiseren met playbooks. Geef responsacties minimale rechten en houd rekening met hun mogelijke impact.",
        "source": "https://learn.microsoft.com/en-us/azure/sentinel/overview"
      }
    ]
  },
  {
    "id": "adr",
    "title": "09 · Van component naar ADR",
    "description": "Maak de keuze expliciet: eisen, alternatieven, consequenties en bewijs.",
    "questions": [
      {
        "id": "q149",
        "topic": "Architectuurbesluiten",
        "prompt": "Wat hoort minimaal in een bruikbaar Architecture Decision Record?",
        "options": [
          "Alleen een lijst met goedgekeurde leveranciers",
          "Alleen de naam van het gekozen Azure-product",
          "Context, opties, besluit, argumenten en consequenties",
          "Alleen een screenshot van de portal"
        ],
        "answer": 2,
        "explanation": "Een ADR bewaart waarom een keuze is gemaakt en welke afwegingen daarbij hoorden. Dit maakt latere heroverweging beter onderbouwd.",
        "source": "https://learn.microsoft.com/en-us/azure/well-architected/architect-role/architecture-decision-record"
      },
      {
        "id": "q150",
        "topic": "Architectuurbesluiten",
        "prompt": "Een team kiest AKS omdat het populair is. Welke vraag maakt het ADR sterker?",
        "options": [
          "Kunnen we alternatieven geheel weglaten?",
          "Welke keuze levert het langste productnamenlijstje op?",
          "Welke concrete eis rechtvaardigt de extra beheerlast tegenover PaaS?",
          "Kunnen we alle kosten uit het document laten?"
        ],
        "answer": 2,
        "explanation": "Een technologiekeuze moet traceerbaar zijn naar eisen. Beschrijf ook eenvoudiger alternatieven en waarom die wel of niet voldoen.",
        "source": "https://learn.microsoft.com/en-us/azure/well-architected/architect-role/architecture-decision-record"
      },
      {
        "id": "q151",
        "topic": "Architectuurbesluiten",
        "prompt": "Een multi-regioontwerp verhoogt beschikbaarheid maar ook kosten en complexiteit. Hoe leg je dit vast?",
        "options": [
          "Als reden om geen hersteltests te doen",
          "Als puur visuele verbetering van het diagram",
          "Als expliciete trade-off met RTO, RPO, kosten en testplan",
          "Als garantie dat storingen onmogelijk zijn"
        ],
        "answer": 2,
        "explanation": "Een ADR hoort consequenties zichtbaar te maken. Hogere complexiteit kan zelf risico introduceren en moet door de eisen gerechtvaardigd worden.",
        "source": "https://learn.microsoft.com/en-us/azure/well-architected/architect-role/architecture-decision-record"
      },
      {
        "id": "q152",
        "topic": "Architectuurbesluiten",
        "prompt": "Een eerdere ADR-aanname over latency blijkt onjuist. Wat doe je?",
        "options": [
          "Verwijder stilzwijgend alle oude argumenten",
          "Pas uitsluitend de datum aan",
          "Meet opnieuw en leg een opvolgend besluit met verwijzing vast",
          "Houd de keuze altijd aan ongeacht bewijs"
        ],
        "answer": 2,
        "explanation": "ADRs zijn een beslisgeschiedenis. Nieuwe inzichten kunnen een opvolgend besluit rechtvaardigen zonder de oorspronkelijke context te verliezen.",
        "source": "https://learn.microsoft.com/en-us/azure/well-architected/architect-role/architecture-decision-record"
      }
    ]
  }
];
