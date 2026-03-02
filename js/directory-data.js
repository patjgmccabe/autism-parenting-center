/* ============================================================
   Autism Parenting Center — directory-data.js
   Support Organization Directory — state-by-state data

   Category slugs:
     "government"    → Government & Public Benefits Services
     "parent-family" → Parent & Family Support Networks
     "advocacy"      → Advocacy, Legal & Rights Protection
     "respite"       → Respite, Wellness & Specialized Caregiver Services

   Entry shape:
   {
     name:        "Organization Name",
     category:    "government",          // one of the four slugs above
     description: "Brief description.",
     website:     "https://example.org", // optional — omit if none
     phone:       "800-000-0000"         // optional — omit if none
   }
   ============================================================ */

const DIRECTORY_DATA = {

  "Alabama": [

    // Government & Public Benefits Services
    {
      name: "Alabama Council on Developmental Disabilities (ACDD)",
      category: "government",
      description: "Promotes independence, community inclusion, and employment for people with developmental disabilities by providing advocacy, grants, and resources to individuals and family members statewide.",
      website: "https://acdd.org"
    },
    {
      name: "Alabama Department of Mental Health – Division of Developmental Disabilities",
      category: "government",
      description: "Administers Medicaid Home and Community-Based Services (HCBS) waivers and coordinates support services for individuals with developmental disabilities and their families through regional offices statewide.",
      website: "https://mh.alabama.gov"
    },
    {
      name: "Alabama Department of Rehabilitation Services (ADRS) – Children's Rehabilitation Service",
      category: "government",
      description: "Provides a continuum of services for children with disabilities and their families, including therapy, care coordination, and the Parent Connection Network.",
      website: "https://rehab.alabama.gov",
      phone: "800-441-7607"
    },
    {
      name: "Alabama Early Intervention System (AEIS)",
      category: "government",
      description: "Connects families of infants and toddlers (birth–age 2) with developmental delays or disabilities to early intervention services, service coordination, and family supports.",
      website: "https://children.alabama.gov",
      phone: "800-543-3098"
    },
    {
      name: "Alabama Medicaid Agency – Home and Community-Based Services Waivers",
      category: "government",
      description: "Funds home and community-based waiver programs (including Individual Supports and Personal Choices) that enable individuals with disabilities to receive care at home and give families flexible support funding.",
      website: "https://medicaid.alabama.gov"
    },

    // Parent & Family Support Networks
    {
      name: "Alabama Parent Education Center (APEC)",
      category: "parent-family",
      description: "Alabama's federally designated Parent Training and Information (PTI) Center; offers free workshops, individual consultations, and leadership training to help families of children with disabilities navigate special education, IEPs, and community resources.",
      website: "https://alabamaparentcenter.com"
    },
    {
      name: "Family Voices of Alabama (FVAL) – Family-to-Family Health Information Center",
      category: "parent-family",
      description: "Staffed by parents of children with special health care needs, FVAL provides individualized guidance, resource navigation, and peer connection for families of children with disabilities of all ages statewide; bilingual (English/Spanish).",
      website: "https://familyvoicesal.org",
      phone: "877-771-3862"
    },
    {
      name: "Parent Connection Network of Alabama",
      category: "parent-family",
      description: "A statewide network administered through the Alabama Department of Rehabilitation Services that matches families of children with disabilities with trained parent volunteers for peer support, practical advice, and local resource sharing.",
      website: "https://rehab.alabama.gov",
      phone: "800-441-7607"
    },

    // Advocacy, Legal & Rights Protection
    {
      name: "Alabama Disabilities Advocacy Program (ADAP)",
      category: "advocacy",
      description: "Alabama's federally mandated Protection and Advocacy (P&A) agency, providing free legally based advocacy services to Alabamians with disabilities on issues including special education, Medicaid, abuse and neglect, and civil rights.",
      website: "https://adap.ua.edu",
      phone: "800-826-1675"
    },
    {
      name: "Alabama Family Trust",
      category: "advocacy",
      description: "Administers pooled special needs trusts that supplement government benefits (Medicaid, SSI) for individuals with disabilities without jeopardizing eligibility, offering families a secure long-term financial planning tool.",
      website: "https://alabamafamilytrust.com",
      phone: "844-238-4630"
    },
    {
      name: "The Arc of Alabama",
      category: "advocacy",
      description: "Statewide advocacy organization promoting and protecting the rights of individuals with intellectual and developmental disabilities, supporting families through policy advocacy, resource referrals, and community education.",
      website: "https://arcalabama.org"
    },
    {
      name: "Partners in Policymaking – Alabama",
      category: "advocacy",
      description: "An intensive leadership and advocacy training program (offered through ACDD) that equips parents of children with disabilities and self-advocates to effectively influence policy and improve systems of support.",
      website: "https://acdd.org"
    },

    // Respite, Wellness & Specialized Caregiver Services
    {
      name: "Alabama Lifespan Respite Resource Network (ARRN)",
      category: "respite",
      description: "A statewide network providing respite care coordination, voucher reimbursement, caregiver education, and a directory of respite providers for families caring for individuals of any age with a disability or chronic illness.",
      website: "https://alabamarespite.org",
      phone: "866-737-8252"
    },
    {
      name: "H.E.A.R.T.S. Program (Help, Emergency and Respite Treatment Service)",
      category: "respite",
      description: "Funded by Alabama's Children's Trust Fund, this program provides respite vouchers for parents of children with special needs (ages 0–19), allowing families to choose their own caregiver and take scheduled breaks, along with parent training in First Aid and CPR.",
      website: "https://ctf.alabama.gov"
    },

  ],

  "Alaska": [

    // Government & Public Benefits Services
    {
      name: "Alaska Aging and Disability Resource Centers (ADRC)",
      category: "government",
      description: "A statewide network of regional centers connecting seniors, people with disabilities, and their caregivers to long-term services and supports including Medicaid options, respite, transportation, and home modifications—regardless of age or income.",
      website: "https://health.alaska.gov/ADRC",
      phone: "855-565-2017"
    },
    {
      name: "Alaska Division of Senior and Disabilities Services – Home and Community-Based Services (HCBS) Waivers",
      category: "government",
      description: "Administers Medicaid waiver programs that fund home and community-based supports for Alaskans with disabilities, enabling families to access in-home care and individualized services as alternatives to institutionalization.",
      website: "https://dhss.alaska.gov"
    },
    {
      name: "Governor's Council on Disabilities and Special Education (GCDSE)",
      category: "government",
      description: "Alaska's federally mandated Developmental Disabilities Council; advocates for systems change and improved services for individuals with disabilities and their families through policy, planning, and community engagement.",
      website: "https://health.alaska.gov/GCDSE",
      phone: "888-269-8990"
    },

    // Parent & Family Support Networks
    {
      name: "Stone Soup Group",
      category: "parent-family",
      description: "Alaska's only federally designated Parent Training and Information (PTI) Center and Family-to-Family Health Information Center; staffed almost entirely by parents of children with special needs, offering free one-on-one navigation, workshops, advocacy training, and a peer-matching program statewide.",
      website: "https://stonesoupgroup.org",
      phone: "907-561-3701"
    },

    // Advocacy, Legal & Rights Protection
    {
      name: "Disability Law Center of Alaska",
      category: "advocacy",
      description: "Alaska's federally designated Protection and Advocacy (P&A) organization, providing free legal representation, education, and systemic advocacy to Alaskans with disabilities on issues including special education rights, abuse and neglect, and Medicaid access; offices in Anchorage, Fairbanks, and Juneau.",
      website: "https://dlcak.org",
      phone: "800-478-1234"
    },
    {
      name: "Key Coalition of Alaska",
      category: "advocacy",
      description: "A statewide nonprofit advocacy organization of individuals with intellectual and developmental disabilities and their families, working to strengthen community-based services and amplify the family voice in state policy decisions.",
      website: "https://keycoalition.org"
    },

    // Respite, Wellness & Specialized Caregiver Services
    {
      name: "Alaska Family Caregiver Support Program (FCSP)",
      category: "respite",
      description: "Administered through the Division of Senior and Disabilities Services; provides caregivers with information, counseling, support groups, caregiver training, and respite funding, including serving grandparents (age 55+) raising grandchildren with special needs.",
      website: "https://health.alaska.gov/FCSP"
    },
    {
      name: "UReCares Stipend and Respite Program – Alaska Impact Alliance",
      category: "respite",
      description: "Funded by the Alaska Mental Health Trust Authority; provides direct financial stipends to eligible caregivers of individuals with special needs—including a general-use stipend and a designated respite/self-care stipend—to reduce caregiver burnout statewide.",
      website: "https://alaskaimpactalliance.com"
    },

  ],

  "Arizona": [

    // Government & Public Benefits Services
    {
      name: "Arizona Developmental Disabilities Planning Council (ADDPC)",
      category: "government",
      description: "Arizona's federally mandated DD Council; funds advocacy, systems-change projects, and capacity-building grants that benefit individuals with intellectual and developmental disabilities and their families statewide.",
      website: "https://addpc.az.gov"
    },
    {
      name: "Arizona Division of Developmental Disabilities (DDD) – Department of Economic Security",
      category: "government",
      description: "The primary state agency administering home and community-based services, Medicaid waivers, and support coordination for Arizonans with developmental disabilities and their families.",
      website: "https://des.az.gov/DDD",
      phone: "844-770-9500"
    },
    {
      name: "Arizona Early Intervention Program (AzEIP)",
      category: "government",
      description: "Arizona's Part C IDEA program providing early intervention services and family support for infants and toddlers (birth–age 3) with developmental delays or disabilities, building family capacity to support their child's development.",
      website: "https://azdes.gov/azeip"
    },

    // Parent & Family Support Networks
    {
      name: "Encircle Families (formerly Raising Special Kids)",
      category: "parent-family",
      description: "Arizona's federally designated Parent Training and Information (PTI) Center and Family-to-Family Health Information Center; offers free, statewide support to families of children with disabilities from birth to age 26, including one-on-one navigation, peer mentoring, workshops in English and Spanish, and Positive Behavior Support training.",
      website: "https://encirclefamilies.org",
      phone: "602-242-4366"
    },

    // Advocacy, Legal & Rights Protection
    {
      name: "Disability Rights Arizona",
      category: "advocacy",
      description: "Arizona's federally designated Protection and Advocacy (P&A) organization; provides free legal advocacy, representation, and systemic change work to protect the rights of Arizonans with disabilities in areas including special education, Medicaid, abuse and neglect, and employment.",
      website: "https://disabilityrightsaz.org",
      phone: "800-927-2260"
    },
    {
      name: "The Arc of Arizona",
      category: "advocacy",
      description: "Statewide advocacy organization and affiliate network promoting and protecting the rights of individuals with intellectual and developmental disabilities; supports families through policy advocacy, resource referrals, self-advocate leadership, and community inclusion initiatives.",
      website: "https://arcaz.org"
    },

    // Respite, Wellness & Specialized Caregiver Services
    {
      name: "Arizona Caregiver Coalition",
      category: "respite",
      description: "A statewide nonprofit operating a Caregiver Resource Line offering information, referrals, respite vouchers, and support services for family caregivers of individuals with disabilities or chronic conditions of any age.",
      website: "https://azcaregiver.org",
      phone: "888-737-7494"
    },

  ],

  "Arkansas": [

    // Government & Public Benefits Services
    {
      name: "Arkansas Division of Developmental Disabilities Services (DDS) – Department of Human Services",
      category: "government",
      description: "The primary state agency administering the Community and Employment Supports (CES) Waiver, Home and Community-Based Services, and residential programs for Arkansans with intellectual and developmental disabilities; supports families in accessing services and care coordination.",
      website: "https://humanservices.arkansas.gov",
      phone: "501-683-5687"
    },
    {
      name: "Arkansas Early Intervention System (AEIS)",
      category: "government",
      description: "Part C IDEA program providing family-centered early intervention services for infants and toddlers (birth–age 3) with developmental delays or disabilities, including service coordination and family training to support the child's development at home.",
      website: "https://humanservices.arkansas.gov/aeis"
    },
    {
      name: "Arkansas Governor's Council on Developmental Disabilities (GCDD)",
      category: "government",
      description: "Arkansas's federally mandated DD Council; funds advocacy, self-determination training, and systems-change initiatives benefiting individuals with intellectual and developmental disabilities and their families statewide.",
      website: "https://gcdd.arkansas.gov"
    },

    // Parent & Family Support Networks
    {
      name: "Arkansas Autism Resource & Outreach Center (AAROC)",
      category: "parent-family",
      description: "A statewide nonprofit providing hope, direction, and support to families of individuals with autism spectrum disorder; offers free parent training, resource navigation, educational advocacy assistance, and technical assistance to families across all 75 Arkansas counties.",
      website: "https://aaroc.org"
    },
    {
      name: "Arkansas Disability Coalition – Parent Training & Information (PTI) Center",
      category: "parent-family",
      description: "Arkansas's federally designated PTI Center serving families of children with any disability from birth through age 26; provides free training, information, and one-on-one support to help parents effectively participate in their child's education and access services.",
      website: "https://ardisabilitycoalition.org"
    },
    {
      name: "Partners for Inclusive Communities – University of Arkansas",
      category: "parent-family",
      description: "Arkansas's federally designated University Center on Excellence in Developmental Disabilities (UCEDD); provides research, training, technical assistance, and community education to improve outcomes for individuals with disabilities and their families.",
      website: "https://uark.edu/partners"
    },

    // Advocacy, Legal & Rights Protection
    {
      name: "Disability Rights Arkansas (DRA)",
      category: "advocacy",
      description: "Arkansas's federally mandated Protection and Advocacy (P&A) organization; provides free legal advocacy and representation to Arkansans with disabilities covering special education, abuse and neglect, Medicaid access, and civil rights.",
      website: "https://disabilityrightsar.org",
      phone: "501-296-1775"
    },
    {
      name: "The Arc of Arkansas",
      category: "advocacy",
      description: "Statewide advocacy organization promoting the rights and quality of life of people with intellectual and developmental disabilities; supports families through legislative advocacy, community inclusion initiatives, and healthcare access efforts.",
      website: "https://arcarkansas.org"
    },

    // Respite, Wellness & Specialized Caregiver Services
    {
      name: "Arkansas Lifespan Respite Coalition (ALRC) – Department of Human Services",
      category: "respite",
      description: "A statewide coalition coordinating respite care access for family caregivers of individuals with special needs of any age; administers respite vouchers, offers free online caregiver training, and maintains a statewide provider network to reduce caregiver burnout.",
      website: "https://humanservices.arkansas.gov/lifespan-respite"
    },

  ],

  "California": [

    // Government & Public Benefits Services
    {
      name: "California Department of Developmental Services (DDS) – Early Start Program",
      category: "government",
      description: "Administers Part C IDEA early intervention services for infants and toddlers (birth–age 3) with developmental disabilities, connecting families with service coordination, therapy, and 47 state-funded Family Resource Centers statewide.",
      website: "https://dds.ca.gov/early-start",
      phone: "800-515-2229"
    },
    {
      name: "California Department of Developmental Services (DDS) – Regional Center System",
      category: "government",
      description: "Contracts with 21 nonprofit Regional Centers statewide to provide lifelong case management, service coordination, respite care authorization, behavioral supports, and Individual Program Plans (IPPs) for individuals with developmental disabilities and their families at no cost.",
      website: "https://dds.ca.gov",
      phone: "916-654-1690"
    },
    {
      name: "California State Council on Developmental Disabilities (SCDD)",
      category: "government",
      description: "An independent state agency mandated under federal law to advocate for systems change and improved services for Californians with developmental disabilities and their families; funds grassroots advocacy and self-determination projects statewide.",
      website: "https://scdd.ca.gov"
    },

    // Parent & Family Support Networks
    {
      name: "California Autism Professional Training and Information Network (CAPTAIN)",
      category: "parent-family",
      description: "A statewide cross-agency network supporting families and professionals in understanding and applying evidence-based practices for individuals with autism spectrum disorder across education, regional center, and health systems.",
      website: "https://captain.ucdavis.edu"
    },
    {
      name: "Family Empowerment Centers (FECs) – California Department of Education",
      category: "parent-family",
      description: "A statewide network of 32 parent-led nonprofit centers serving families of students with disabilities ages 3–22; offers peer-to-peer support, IEP navigation, training workshops, and dispute resolution assistance at no cost.",
      website: "https://cde.ca.gov/FECs"
    },
    {
      name: "Family Resource Centers Network of California (FRCNCA)",
      category: "parent-family",
      description: "The statewide coalition of California's 47 Early Start Family Resource Centers, each staffed by parents of children with special needs; provides parent-to-parent support, resource navigation, and advocacy training for families of children with disabilities ages 0–3.",
      website: "https://frcnca.org"
    },
    {
      name: "Team of Advocates for Special Kids (TASK)",
      category: "parent-family",
      description: "Southern California's federally designated Parent Training and Information (PTI) Center serving families of individuals with disabilities from birth through age 26; provides free trainings, workshops, and individual support on special education rights, IEPs, and transition planning.",
      website: "https://taskca.org",
      phone: "714-533-8275"
    },
    {
      name: "UC Davis MIND Institute – Family Navigator Program",
      category: "parent-family",
      description: "A no-cost peer mentoring program matching families who have received a new autism or neurodevelopmental diagnosis with trained peer mentors who are themselves family members of individuals with disabilities; helps families navigate services and reduce isolation.",
      website: "https://health.ucdavis.edu/mind-institute"
    },

    // Advocacy, Legal & Rights Protection
    {
      name: "Disability Rights California",
      category: "advocacy",
      description: "California's federally designated Protection and Advocacy (P&A) organization and the largest disability rights legal organization in the U.S.; provides free legal advocacy, representation, and a dedicated Clients' Rights Advocate in each of California's 21 Regional Centers.",
      website: "https://disabilityrightsca.org",
      phone: "800-776-5746"
    },
    {
      name: "The Arc of California",
      category: "advocacy",
      description: "Statewide advocacy organization promoting the rights of individuals with intellectual and developmental disabilities; supports families through legislative advocacy, Individual Program Plan (IPP) guidance, and service denial navigation.",
      website: "https://thearcca.org"
    },

    // Respite, Wellness & Specialized Caregiver Services
    {
      name: "California Regional Center Respite Services",
      category: "respite",
      description: "Through each family's Individual Program Plan (IPP), California's 21 Regional Centers authorize and fund free in-home respite care for families of individuals with developmental disabilities, providing caregivers scheduled relief of typically 8–30 hours per month with trained respite providers.",
      website: "https://dds.ca.gov/rc"
    },

  ],

  "Connecticut": [

    // Government & Public Benefits Services
    {
      name: "Connecticut Council on Developmental Disabilities (CTCDD)",
      category: "government",
      description: "Connecticut's federally mandated DD Council; funds advocacy, community inclusion, and systems-change initiatives that benefit individuals with developmental disabilities and their families statewide.",
      website: "https://ct.gov/ctcdd"
    },
    {
      name: "Connecticut Department of Developmental Services (DDS)",
      category: "government",
      description: "The primary state agency providing lifelong services to individuals with intellectual and developmental disabilities and their families, including service coordination, home and community-based waiver supports, family support grants, and respite funding.",
      website: "https://portal.ct.gov/dds",
      phone: "860-418-6000"
    },
    {
      name: "Connecticut Birth to Three System",
      category: "government",
      description: "Connecticut's Part C IDEA early intervention program serving infants and toddlers (birth–age 3) with developmental delays or disabilities; provides service coordination, family support, and in-home therapy to build family capacity.",
      website: "https://portal.ct.gov/birthtothree",
      phone: "800-505-7000"
    },

    // Parent & Family Support Networks
    {
      name: "Connecticut Parent Advocacy Center (CPAC)",
      category: "parent-family",
      description: "Connecticut's federally designated Parent Training and Information (PTI) Center; offers free workshops, one-on-one support, and IEP navigation assistance to families of children with disabilities from birth through age 26, in English and Spanish.",
      website: "https://cpacinc.org",
      phone: "800-445-2722"
    },
    {
      name: "Family Support Network – Connecticut DDS",
      category: "parent-family",
      description: "A DDS-funded statewide network providing peer support, resource navigation, and connection to local family support services for parents and caregivers of individuals with developmental disabilities.",
      website: "https://portal.ct.gov/dds"
    },
    {
      name: "Autism Speaks Connecticut Chapter",
      category: "parent-family",
      description: "Regional affiliate providing local families with resource guides, peer connections, walk events, and access to Autism Speaks' national tool kits, resource library, and 100 Day Kit for newly diagnosed families.",
      website: "https://autismspeaks.org"
    },

    // Advocacy, Legal & Rights Protection
    {
      name: "Disability Rights Connecticut",
      category: "advocacy",
      description: "Connecticut's federally designated Protection and Advocacy (P&A) organization; provides free legal advocacy, information, and representation to protect the rights of Connecticut residents with disabilities in areas including special education, Medicaid, and abuse and neglect.",
      website: "https://disabilityrightsct.org",
      phone: "860-297-4300"
    },
    {
      name: "The Arc of Connecticut",
      category: "advocacy",
      description: "Statewide advocacy organization promoting the rights and full inclusion of individuals with intellectual and developmental disabilities; supports families through legislative advocacy, referrals, and connection to local Arc affiliates.",
      website: "https://thearcct.org",
      phone: "860-246-6000"
    },

    // Respite, Wellness & Specialized Caregiver Services
    {
      name: "Connecticut Lifespan Respite Care Program – DDS",
      category: "respite",
      description: "Administered through Connecticut DDS, this program provides respite vouchers and caregiver relief funding for families caring for individuals with developmental disabilities, as well as training and a statewide provider directory.",
      website: "https://portal.ct.gov/dds"
    },
    {
      name: "The Kennedy Center – Respite Services",
      category: "respite",
      description: "A statewide nonprofit providing in-home and community-based respite care for families of individuals with intellectual and developmental disabilities, offering trained relief caregivers and flexible scheduling to reduce caregiver stress.",
      website: "https://thekennedycenterinc.org",
      phone: "203-366-7561"
    },

  ],

  "Delaware": [

    // Government & Public Benefits Services
    {
      name: "Delaware Division of Developmental Disabilities Services (DDDS)",
      category: "government",
      description: "The primary state agency providing residential, day, employment, and family support services for Delawareans with intellectual and developmental disabilities; administers Medicaid waiver supports and service coordination for eligible individuals and their families.",
      website: "https://dhss.delaware.gov/dds",
      phone: "302-255-9390"
    },
    {
      name: "Delaware Developmental Disabilities Council (DDDC)",
      category: "government",
      description: "Delaware's federally mandated DD Council; funds advocacy, self-determination, and systems-change projects to improve the lives of individuals with developmental disabilities and their families statewide.",
      website: "https://ddc.delaware.gov",
      phone: "302-739-3333"
    },
    {
      name: "Delaware Early Intervention Program – Birth to Three",
      category: "government",
      description: "Delaware's Part C IDEA early intervention program providing service coordination, therapy, and family supports for infants and toddlers (birth–age 3) with developmental delays or disabilities.",
      website: "https://dhss.delaware.gov/dph/cphpc/bthreeabout.html",
      phone: "302-295-8620"
    },

    // Parent & Family Support Networks
    {
      name: "Parent Information Center of Delaware (PIC-DE)",
      category: "parent-family",
      description: "Delaware's federally designated Parent Training and Information (PTI) Center; provides free training, individual support, and IEP navigation assistance to families of children and youth with disabilities from birth through age 26.",
      website: "https://picofdel.org",
      phone: "302-999-7394"
    },
    {
      name: "Family-to-Family Health Information Center – Delaware",
      category: "parent-family",
      description: "A parent-staffed program helping families of children with special health care needs navigate medical systems, access community resources, and connect with peer support statewide.",
      website: "https://fhsc.com/delaware"
    },

    // Advocacy, Legal & Rights Protection
    {
      name: "Disability Rights Delaware",
      category: "advocacy",
      description: "Delaware's federally designated Protection and Advocacy (P&A) organization; provides free legal advocacy, representation, and information to protect the rights of Delawareans with disabilities in areas including special education, Medicaid, and abuse prevention.",
      website: "https://disabilityrightsde.org",
      phone: "302-336-5400"
    },
    {
      name: "The Arc of Delaware",
      category: "advocacy",
      description: "Statewide advocacy organization promoting the rights and community inclusion of individuals with intellectual and developmental disabilities; supports families through legislative advocacy, public awareness, and connection to local resources.",
      website: "https://arcde.org",
      phone: "302-836-4464"
    },

    // Respite, Wellness & Specialized Caregiver Services
    {
      name: "Delaware Lifespan Respite Program – Easterseals Delaware",
      category: "respite",
      description: "Coordinates and expands access to respite care for family caregivers of individuals with disabilities of all ages; provides caregiver navigation, voucher assistance, and a statewide respite provider directory.",
      website: "https://easterseals.com/de",
      phone: "302-324-4444"
    },
    {
      name: "DDDS Family Support Services – Respite Care",
      category: "respite",
      description: "Through Delaware DDDS, eligible families of individuals with developmental disabilities may access funded in-home respite care to provide temporary relief, reduce caregiver burnout, and support family stability.",
      website: "https://dhss.delaware.gov/dds",
      phone: "302-255-9390"
    },

  ],

  "Florida": [

    // Government & Public Benefits Services
    {
      name: "Agency for Persons with Disabilities (APD) – Florida",
      category: "government",
      description: "The primary state agency supporting Floridians with developmental disabilities and their families; administers the iBudget Medicaid waiver, service coordination, and community-based services for eligible individuals statewide.",
      website: "https://apdcares.org",
      phone: "866-273-2273"
    },
    {
      name: "Florida Developmental Disabilities Council (FDDC)",
      category: "government",
      description: "Florida's federally mandated DD Council; funds advocacy, self-determination, and systems-change initiatives that improve the independence and community participation of individuals with developmental disabilities and their families.",
      website: "https://fddc.org",
      phone: "850-488-4180"
    },
    {
      name: "Florida Early Steps – Early Intervention Program",
      category: "government",
      description: "Florida's Part C IDEA program providing early intervention services for infants and toddlers (birth–age 3) with developmental delays or disabilities; offers service coordination, therapies, and family training through a statewide network of lead agencies.",
      website: "https://floridaschildren.org/earlysteps",
      phone: "888-352-5337"
    },

    // Parent & Family Support Networks
    {
      name: "Family Network on Disabilities (FND)",
      category: "parent-family",
      description: "Florida's federally designated Parent Training and Information (PTI) Center and Family-to-Family Health Information Center; staffed primarily by parents of children with disabilities, offering free IEP support, peer mentoring, training workshops, and resource navigation statewide in English and Spanish.",
      website: "https://fndusa.org",
      phone: "800-825-5736"
    },
    {
      name: "Autism Society of Greater Orlando",
      category: "parent-family",
      description: "One of Florida's largest Autism Society affiliates; provides family support groups, resource navigation, community events, and advocacy assistance for families of individuals with autism across Central Florida.",
      website: "https://autismsocietyoforlando.org",
      phone: "407-855-1202"
    },
    {
      name: "Florida Autism Center of Excellence (FACE) – University of South Florida",
      category: "parent-family",
      description: "A USF-based initiative providing family education, professional training, and community outreach on evidence-based autism practices; offers free parent workshops and consultations across Florida.",
      website: "https://usf.edu"
    },

    // Advocacy, Legal & Rights Protection
    {
      name: "Disability Rights Florida",
      category: "advocacy",
      description: "Florida's federally designated Protection and Advocacy (P&A) organization; provides free legal advocacy, investigations, and representation to protect the civil and human rights of Floridians with disabilities in areas including special education, Medicaid, abuse and neglect, and employment.",
      website: "https://disabilityrightsflorida.org",
      phone: "800-342-0823"
    },
    {
      name: "The Arc of Florida",
      category: "advocacy",
      description: "Statewide advocacy organization promoting the rights and full inclusion of individuals with intellectual and developmental disabilities; supports families through legislative advocacy, APD waiver navigation, and connection to local Arc chapters statewide.",
      website: "https://arcflorida.com",
      phone: "850-921-0460"
    },

    // Respite, Wellness & Specialized Caregiver Services
    {
      name: "Florida Lifespan Respite Network – Caregiver Action Network Florida",
      category: "respite",
      description: "Statewide network coordinating respite resources, caregiver education, and provider training for families caring for individuals with disabilities or chronic conditions of any age; maintains a searchable respite provider database.",
      website: "https://floridarespite.org"
    },
    {
      name: "Medicaid Waiver Respite Services – APD Florida",
      category: "respite",
      description: "Through the iBudget Medicaid waiver, eligible Florida families of individuals with developmental disabilities can access funded in-home and out-of-home respite care to provide temporary caregiver relief and support family stability.",
      website: "https://apdcares.org",
      phone: "866-273-2273"
    },

  ],

  "Georgia": [

    // Government & Public Benefits Services
    {
      name: "Georgia Department of Behavioral Health and Developmental Disabilities (DBHDD)",
      category: "government",
      description: "The primary state agency overseeing services for Georgians with intellectual and developmental disabilities; administers Medicaid waiver programs, residential supports, and community-based services for eligible individuals and their families.",
      website: "https://dbhdd.georgia.gov",
      phone: "800-436-7442"
    },
    {
      name: "Georgia Council on Developmental Disabilities (GCDD)",
      category: "government",
      description: "Georgia's federally mandated DD Council; funds advocacy, self-determination, and systems-change projects to advance the inclusion and independence of individuals with developmental disabilities and their families statewide.",
      website: "https://gcdd.org",
      phone: "888-275-4233"
    },
    {
      name: "Georgia's Early Intervention Program – Babies Can't Wait",
      category: "government",
      description: "Georgia's Part C IDEA program providing service coordination, therapies, and family supports for infants and toddlers (birth–age 3) with developmental delays or disabilities, building family capacity to support their child's growth.",
      website: "https://dph.georgia.gov/bcw",
      phone: "800-229-2038"
    },

    // Parent & Family Support Networks
    {
      name: "Parents Educating and Advocating for Children with Disabilities (PEACH) – Georgia",
      category: "parent-family",
      description: "Georgia's federally designated Parent Training and Information (PTI) Center; provides free one-on-one support, workshops, and IEP navigation assistance to families of children with all disabilities from birth through age 26, in English and Spanish.",
      website: "https://peachparent.org",
      phone: "877-252-6600"
    },
    {
      name: "Autism Society of Georgia",
      category: "parent-family",
      description: "Statewide affiliate of the Autism Society of America; connects families of individuals with autism to peer support, resource navigation, community events, and advocacy across Georgia.",
      website: "https://autismsocietyofga.org",
      phone: "404-657-7998"
    },
    {
      name: "Family-to-Family Health Information Center – Georgia",
      category: "parent-family",
      description: "A parent-staffed program helping Georgia families of children with special health care needs navigate medical and community systems, access resources, and connect with peer support.",
      website: "https://georgiaadvocacy.org"
    },

    // Advocacy, Legal & Rights Protection
    {
      name: "Georgia Advocacy Office (GAO)",
      category: "advocacy",
      description: "Georgia's federally designated Protection and Advocacy (P&A) organization; provides free legal advocacy, investigations, and representation to protect the rights of Georgians with disabilities in areas including special education, Medicaid, institutional abuse, and employment.",
      website: "https://thegao.org",
      phone: "800-537-2329"
    },
    {
      name: "The Arc of Georgia",
      category: "advocacy",
      description: "Statewide advocacy organization promoting the rights and community inclusion of individuals with intellectual and developmental disabilities; supports families through legislative advocacy, public education, and connection to local Arc chapters.",
      website: "https://arcga.org",
      phone: "404-814-6204"
    },

    // Respite, Wellness & Specialized Caregiver Services
    {
      name: "Georgia Lifespan Respite Resource Network (GLRRN)",
      category: "respite",
      description: "A statewide network coordinating access to respite care for family caregivers of individuals with disabilities or chronic conditions of any age; provides caregiver education, provider training, and a respite locator tool.",
      website: "https://georgiarespite.org"
    },
    {
      name: "DBHDD NOW and COMP Waiver – Respite Services",
      category: "respite",
      description: "Through Georgia's NOW and COMP Medicaid waivers, eligible families of individuals with developmental disabilities can access funded respite care services, providing temporary in-home or out-of-home caregiver relief.",
      website: "https://dbhdd.georgia.gov",
      phone: "800-436-7442"
    },

  ],

  "Hawaii": [

    // Government & Public Benefits Services
    {
      name: "Hawaii Department of Health – Developmental Disabilities Division (DDD)",
      category: "government",
      description: "The primary state agency providing community-based services, service coordination, and Medicaid waiver supports for Hawaiians with developmental disabilities and their families across all islands.",
      website: "https://health.hawaii.gov/ddd",
      phone: "808-733-9370"
    },
    {
      name: "Hawaii Developmental Disabilities Council",
      category: "government",
      description: "Hawaii's federally mandated DD Council; funds advocacy, self-determination, and systems-change initiatives to improve independence and community inclusion for individuals with developmental disabilities and their families statewide.",
      website: "https://hiddc.org",
      phone: "808-586-8100"
    },
    {
      name: "Hawaii Early Intervention Section – Zero-to-Three",
      category: "government",
      description: "Hawaii's Part C IDEA early intervention program providing family-centered services for infants and toddlers (birth–age 3) with developmental delays or disabilities; offers service coordination, therapies, and family supports across all islands.",
      website: "https://health.hawaii.gov/eis",
      phone: "808-594-0600"
    },

    // Parent & Family Support Networks
    {
      name: "AWARE Hawaiʻi – Parent Training and Information Center",
      category: "parent-family",
      description: "Hawaii's federally designated PTI Center serving families of children with all disabilities from birth through age 26; provides free IEP navigation, individual support, workshops, and peer mentoring in multiple languages including English, Spanish, and Hawaiian Creole English.",
      website: "https://awarehawaii.org",
      phone: "808-536-9684"
    },
    {
      name: "Family Support Services – Hawaii DDD",
      category: "parent-family",
      description: "DDD-funded program providing peer support, caregiver training, and connection to community resources for families of individuals with developmental disabilities across Hawaii's islands.",
      website: "https://health.hawaii.gov/ddd"
    },

    // Advocacy, Legal & Rights Protection
    {
      name: "Disability Rights Hawaiʻi",
      category: "advocacy",
      description: "Hawaii's federally designated Protection and Advocacy (P&A) organization; provides free legal advocacy and representation to protect the rights of Hawaiians with disabilities in areas including special education, Medicaid, abuse and neglect, and civil rights.",
      website: "https://drhi.org",
      phone: "808-949-2922"
    },
    {
      name: "The Arc of Hawaii",
      category: "advocacy",
      description: "Statewide advocacy organization promoting the rights and community inclusion of individuals with intellectual and developmental disabilities; supports families through legislative advocacy, public education, and direct services.",
      website: "https://thearcofhawaii.org",
      phone: "808-835-1555"
    },

    // Respite, Wellness & Specialized Caregiver Services
    {
      name: "Respite Care Hawaiʻi",
      category: "respite",
      description: "A nonprofit organization providing in-home respite care and caregiver relief services for families of individuals with developmental disabilities and special needs across Oahu; also offers caregiver training and support groups.",
      website: "https://respitecarehawaii.org",
      phone: "808-737-2477"
    },
    {
      name: "Hawaii Caregiver Support Program – Executive Office on Aging",
      category: "respite",
      description: "Provides information, counseling, respite funding, and supplemental services for family caregivers of individuals with disabilities or chronic conditions, including grandparents raising grandchildren with special needs.",
      website: "https://health.hawaii.gov/eoa",
      phone: "808-586-0100"
    },

  ],

  "Idaho": [

    // Government & Public Benefits Services
    {
      name: "Idaho Division of Developmental Disabilities (DDD) – Department of Health and Welfare",
      category: "government",
      description: "The primary state agency administering Medicaid waiver services, service coordination, and community-based supports for Idahoans with intellectual and developmental disabilities and their families.",
      website: "https://healthandwelfare.idaho.gov/services-programs/disabilities",
      phone: "208-334-5531"
    },
    {
      name: "Idaho Council on Developmental Disabilities (ICDD)",
      category: "government",
      description: "Idaho's federally mandated DD Council; funds advocacy, self-determination, and systems-change initiatives that improve independence and community inclusion for individuals with developmental disabilities and their families statewide.",
      website: "https://icdd.idaho.gov",
      phone: "208-334-2178"
    },
    {
      name: "Idaho Infant/Toddler Program (Infants and Toddlers with Disabilities)",
      category: "government",
      description: "Idaho's Part C IDEA early intervention program providing service coordination, therapies, and family supports for children (birth–age 3) with developmental delays or disabilities; builds family capacity to support their child's development.",
      website: "https://healthandwelfare.idaho.gov/services-programs/children-families/infant-toddler-program",
      phone: "800-926-2588"
    },

    // Parent & Family Support Networks
    {
      name: "Idaho Parents Unlimited (IPUL)",
      category: "parent-family",
      description: "Idaho's federally designated Parent Training and Information (PTI) Center; provides free training, individual support, IEP navigation, and peer mentoring to families of children with disabilities from birth through age 26 statewide.",
      website: "https://ipulidaho.org",
      phone: "208-342-5884"
    },
    {
      name: "Autism Society of the Treasure Valley",
      category: "parent-family",
      description: "Idaho's primary Autism Society affiliate; offers peer support groups, resource navigation, community events, and advocacy assistance for families of individuals with autism across the Treasure Valley region.",
      website: "https://autismsocietytreasurevalley.org",
      phone: "208-377-7099"
    },

    // Advocacy, Legal & Rights Protection
    {
      name: "Disability Rights Idaho",
      category: "advocacy",
      description: "Idaho's federally designated Protection and Advocacy (P&A) organization; provides free legal advocacy, investigations, and representation to protect the rights of Idahoans with disabilities in areas including special education, Medicaid, abuse and neglect, and civil rights.",
      website: "https://disabilityrightsidaho.org",
      phone: "208-336-5353"
    },
    {
      name: "The Arc of Idaho",
      category: "advocacy",
      description: "Statewide advocacy organization promoting the rights and full inclusion of individuals with intellectual and developmental disabilities; supports families through legislative advocacy, public education, and connection to local Arc chapters.",
      website: "https://arcidaho.org",
      phone: "208-377-6400"
    },

    // Respite, Wellness & Specialized Caregiver Services
    {
      name: "Idaho Lifespan Respite Coalition",
      category: "respite",
      description: "A statewide coalition working to expand and coordinate respite care resources for family caregivers of individuals with disabilities of all ages; provides caregiver navigation, provider training, and a respite resource locator.",
      website: "https://icdd.idaho.gov"
    },
    {
      name: "Idaho Department of Health and Welfare – Family Support Services",
      category: "respite",
      description: "Through Idaho's Medicaid waiver programs, eligible families of individuals with developmental disabilities can access funded respite care to provide temporary caregiver relief and support family stability.",
      website: "https://healthandwelfare.idaho.gov",
      phone: "208-334-5531"
    },

  ],

  "Illinois": [

    // Government & Public Benefits Services
    {
      name: "Illinois Department of Human Services – Division of Developmental Disabilities (DDD)",
      category: "government",
      description: "The primary state agency providing residential, day, employment, and family support services for Illinoisans with developmental disabilities; administers Medicaid waiver programs and service coordination through a statewide network of community agencies.",
      website: "https://dhs.illinois.gov/page.aspx?item=29737",
      phone: "800-843-6154"
    },
    {
      name: "Illinois Council on Developmental Disabilities (ICDD)",
      category: "government",
      description: "Illinois's federally mandated DD Council; funds advocacy, self-determination, and systems-change initiatives to improve independence and community inclusion for individuals with developmental disabilities and their families statewide.",
      website: "https://icdd.illinois.gov",
      phone: "217-782-9696"
    },
    {
      name: "Illinois Early Intervention Program",
      category: "government",
      description: "Illinois's Part C IDEA program providing service coordination, therapies, and family supports for infants and toddlers (birth–age 3) with developmental delays or disabilities through a statewide network of providers.",
      website: "https://earlyintervention.illinois.gov",
      phone: "800-323-4769"
    },

    // Parent & Family Support Networks
    {
      name: "Designs for Change – Family Resource Center on Disabilities",
      category: "parent-family",
      description: "Illinois's federally designated Parent Training and Information (PTI) Center; provides free one-on-one support, IEP navigation, workshops, and advocacy training to families of children with disabilities from birth through age 26 across Illinois.",
      website: "https://frcdonline.org",
      phone: "312-939-3513"
    },
    {
      name: "Autism Society of Illinois",
      category: "parent-family",
      description: "Statewide affiliate of the Autism Society of America; provides peer support, resource navigation, community events, and public education for families of individuals with autism across Illinois.",
      website: "https://www.autismillinois.org",
      phone: "630-691-1270"
    },
    {
      name: "Family Support Network – Illinois DHS",
      category: "parent-family",
      description: "DHS-funded statewide network providing peer support, resource navigation, and connection to local family support services for parents and caregivers of individuals with developmental disabilities.",
      website: "https://dhs.illinois.gov"
    },

    // Advocacy, Legal & Rights Protection
    {
      name: "Equip for Equality",
      category: "advocacy",
      description: "Illinois's federally designated Protection and Advocacy (P&A) organization; provides free legal advocacy, self-advocacy support, and representation to protect the rights of Illinoisans with physical and mental disabilities, including in special education, Medicaid, and abuse and neglect.",
      website: "https://equipforequality.org",
      phone: "800-537-2632"
    },
    {
      name: "The Arc of Illinois",
      category: "advocacy",
      description: "Statewide advocacy organization promoting the rights and full inclusion of individuals with intellectual and developmental disabilities; supports families through legislative advocacy, resource referrals, and a statewide chapter network.",
      website: "https://thearcofil.org",
      phone: "630-920-0000"
    },

    // Respite, Wellness & Specialized Caregiver Services
    {
      name: "Illinois Lifespan Respite Program",
      category: "respite",
      description: "Coordinates access to respite care resources for family caregivers of individuals with disabilities of any age; provides caregiver education, voucher assistance, and a statewide respite provider network to reduce caregiver burnout.",
      website: "https://illinoisrespite.org"
    },
    {
      name: "Illinois DHS – Community Care Program & Caregiver Support",
      category: "respite",
      description: "Through Illinois Medicaid waiver programs, eligible families of individuals with developmental disabilities can access funded respite care services, providing temporary in-home or community-based caregiver relief.",
      website: "https://dhs.illinois.gov",
      phone: "800-843-6154"
    },

  ],

  "Indiana": [

    // Government & Public Benefits Services
    {
      name: "Indiana Division of Disability and Rehabilitative Services (DDRS)",
      category: "government",
      description: "The primary state agency administering Medicaid waiver programs, service coordination, and community-based supports for Hoosiers with developmental disabilities; oversees the Family Supports Waiver and Community Integration and Habilitation Waiver.",
      website: "https://www.in.gov/fssa/ddrs",
      phone: "800-545-7763"
    },
    {
      name: "Indiana Governor's Council for People with Disabilities",
      category: "government",
      description: "Indiana's federally mandated DD Council; funds advocacy, self-determination, and systems-change initiatives that improve independence and community inclusion for individuals with developmental disabilities and their families statewide.",
      website: "https://www.in.gov/gpcpd",
      phone: "317-232-7770"
    },
    {
      name: "Indiana First Steps – Early Intervention Program",
      category: "government",
      description: "Indiana's Part C IDEA program providing service coordination, therapies, and family supports for infants and toddlers (birth–age 3) with developmental delays or disabilities through a statewide network of providers.",
      website: "https://www.in.gov/fssa/firststeps",
      phone: "800-441-7837"
    },

    // Parent & Family Support Networks
    {
      name: "IN*SOURCE – Indiana Resource Center for Families with Special Needs",
      category: "parent-family",
      description: "Indiana's federally designated Parent Training and Information (PTI) Center; provides free one-on-one support, IEP navigation, workshops, and advocacy training to families of children with disabilities from birth through age 26 statewide.",
      website: "https://insource.org",
      phone: "800-332-4433"
    },
    {
      name: "Autism Society of Indiana",
      category: "parent-family",
      description: "Statewide affiliate of the Autism Society of America; provides peer support, resource navigation, community events, and public education for families of individuals with autism across Indiana.",
      website: "https://autismsocietyofindiana.org",
      phone: "317-420-2889"
    },
    {
      name: "Family Voices Indiana",
      category: "parent-family",
      description: "Indiana's affiliate of the national Family Voices network; provides information, peer support, and resource navigation for families of children and youth with special health care needs, and helps families navigate insurance and state service systems.",
      website: "https://familyvoicesindiana.org"
    },

    // Advocacy, Legal & Rights Protection
    {
      name: "Disability Rights Indiana",
      category: "advocacy",
      description: "Indiana's federally designated Protection and Advocacy (P&A) organization; provides free legal advocacy, investigations, and representation to protect the rights of Hoosiers with disabilities in areas including special education, Medicaid, abuse and neglect, and civil rights.",
      website: "https://disabilityrightsindiana.org",
      phone: "800-622-4845"
    },
    {
      name: "The Arc of Indiana",
      category: "advocacy",
      description: "Statewide advocacy organization promoting the rights and full inclusion of individuals with intellectual and developmental disabilities; supports families through legislative advocacy, resource referrals, and connection to local Arc chapters statewide.",
      website: "https://arcind.org",
      phone: "317-977-2375"
    },

    // Respite, Wellness & Specialized Caregiver Services
    {
      name: "Indiana Lifespan Respite Care Network",
      category: "respite",
      description: "A statewide network coordinating respite care resources and caregiver support for families of individuals with disabilities of all ages; provides caregiver education, provider training, and a respite resource locator.",
      website: "https://indianarespite.org"
    },
    {
      name: "DDRS Family Supports Waiver – Respite Services",
      category: "respite",
      description: "Through Indiana's Family Supports Waiver, eligible families of individuals with developmental disabilities can access funded respite care to provide temporary caregiver relief and support long-term family stability.",
      website: "https://www.in.gov/fssa/ddrs",
      phone: "800-545-7763"
    },

  ],

  "Iowa": [

    // Government & Public Benefits Services
    {
      name: "Iowa Department of Human Services – Medicaid Home and Community-Based Services Waivers",
      category: "government",
      description: "Administers Medicaid HCBS waivers for Iowans with intellectual disabilities, including the Brain Injury and ID waivers, funding service coordination, residential supports, respite, and family-centered services.",
      website: "https://dhs.iowa.gov",
      phone: "800-972-2017"
    },
    {
      name: "Iowa Developmental Disabilities Council",
      category: "government",
      description: "Iowa's federally mandated DD Council; funds advocacy, self-determination, and systems-change projects to improve independence and community inclusion for individuals with developmental disabilities and their families statewide.",
      website: "https://iddc.iowa.gov",
      phone: "515-725-1707"
    },
    {
      name: "Iowa Early ACCESS – Early Intervention Program",
      category: "government",
      description: "Iowa's Part C IDEA program providing service coordination, therapies, and family supports for infants and toddlers (birth–age 3) with developmental delays or disabilities to build family capacity and support child development.",
      website: "https://educateiowa.gov/earlyaccess",
      phone: "888-425-4371"
    },

    // Parent & Family Support Networks
    {
      name: "Iowa Compass – University of Iowa",
      category: "parent-family",
      description: "A free information and referral service helping Iowans with disabilities and their families navigate community resources, Medicaid waivers, and support services; staffed by specialists with expertise in disability-related systems.",
      website: "https://iowacompass.org",
      phone: "800-779-2001"
    },
    {
      name: "Iowa Parents and Families for Children and Youth with Disabilities (Iowa PTI)",
      category: "parent-family",
      description: "Iowa's federally designated Parent Training and Information (PTI) Center; provides free one-on-one support, IEP navigation, workshops, and peer mentoring to families of children with disabilities from birth through age 26 statewide.",
      website: "https://iowaptifamilies.org",
      phone: "515-243-1713"
    },

    // Advocacy, Legal & Rights Protection
    {
      name: "Disability Rights Iowa",
      category: "advocacy",
      description: "Iowa's federally designated Protection and Advocacy (P&A) organization; provides free legal advocacy, investigations, and representation to protect the rights of Iowans with disabilities in areas including special education, Medicaid, abuse and neglect, and civil rights.",
      website: "https://driowa.org",
      phone: "800-779-2502"
    },
    {
      name: "The Arc of Iowa",
      category: "advocacy",
      description: "Statewide advocacy organization promoting the rights and full inclusion of individuals with intellectual and developmental disabilities; supports families through legislative advocacy, public education, and connection to local Arc chapters.",
      website: "https://arc-ia.org",
      phone: "515-282-2358"
    },

    // Respite, Wellness & Specialized Caregiver Services
    {
      name: "Iowa Lifespan Respite Coalition",
      category: "respite",
      description: "A statewide coalition coordinating respite care resources for family caregivers of individuals with disabilities of any age; provides caregiver education, provider training, and navigation to local respite services.",
      website: "https://iddc.iowa.gov"
    },
    {
      name: "Iowa DHS – Medicaid Waiver Respite Services",
      category: "respite",
      description: "Through Iowa's Medicaid HCBS waivers, eligible families of individuals with developmental disabilities can access funded respite care to provide temporary caregiver relief and support long-term family stability.",
      website: "https://dhs.iowa.gov",
      phone: "800-972-2017"
    },

  ],

  "Kansas": [

    // Government & Public Benefits Services
    {
      name: "Kansas Department for Aging and Disability Services (KDADS)",
      category: "government",
      description: "Administers Medicaid HCBS waivers for Kansans with intellectual and developmental disabilities, including the Intellectual and Developmental Disability (IDD) Waiver, funding service coordination, residential supports, respite, and community-based services.",
      website: "https://kdads.ks.gov",
      phone: "785-296-4986"
    },
    {
      name: "Kansas Council on Developmental Disabilities",
      category: "government",
      description: "Kansas's federally mandated DD Council; funds advocacy, self-determination, and systems-change initiatives to improve independence and community inclusion for individuals with developmental disabilities and their families statewide.",
      website: "https://kcdd.org",
      phone: "785-296-2608"
    },
    {
      name: "Kansas Infant-Toddler Services – Early Intervention Program",
      category: "government",
      description: "Kansas's Part C IDEA program providing service coordination, therapies, and family supports for infants and toddlers (birth–age 3) with developmental delays or disabilities to build family capacity.",
      website: "https://ksde.org/its",
      phone: "785-296-6135"
    },

    // Parent & Family Support Networks
    {
      name: "Families Together – Kansas PTI Center",
      category: "parent-family",
      description: "Kansas's federally designated Parent Training and Information (PTI) Center; provides free one-on-one support, IEP navigation, workshops, and peer mentoring to families of children with disabilities from birth through age 26 statewide, in English and Spanish.",
      website: "https://familiestogetherinc.org",
      phone: "888-815-6364"
    },
    {
      name: "Autism Society of the Heartland",
      category: "parent-family",
      description: "Kansas and Missouri affiliate of the Autism Society of America; provides peer support, resource navigation, community events, and advocacy assistance for families of individuals with autism across the Heartland region.",
      website: "https://autismsocietyoftheheartland.org",
      phone: "913-706-0042"
    },

    // Advocacy, Legal & Rights Protection
    {
      name: "Disability Rights Center of Kansas (DRC)",
      category: "advocacy",
      description: "Kansas's federally designated Protection and Advocacy (P&A) organization; provides free legal advocacy, investigations, and representation to protect the rights of Kansans with disabilities in areas including special education, Medicaid, abuse and neglect, and civil rights.",
      website: "https://drckansas.org",
      phone: "877-776-1541"
    },
    {
      name: "The Arc of Kansas",
      category: "advocacy",
      description: "Statewide advocacy organization promoting the rights and full inclusion of individuals with intellectual and developmental disabilities; supports families through legislative advocacy, public education, and connection to local Arc chapters.",
      website: "https://arcks.org",
      phone: "785-232-8855"
    },

    // Respite, Wellness & Specialized Caregiver Services
    {
      name: "Kansas Lifespan Respite Coalition",
      category: "respite",
      description: "A statewide coalition coordinating respite care resources for family caregivers of individuals with disabilities of any age; provides caregiver education, provider training, and navigation to local respite services.",
      website: "https://kcdd.org"
    },
    {
      name: "KDADS IDD Waiver – Respite Services",
      category: "respite",
      description: "Through Kansas's IDD Medicaid waiver, eligible families of individuals with developmental disabilities can access funded respite care to provide temporary caregiver relief and support long-term family stability.",
      website: "https://kdads.ks.gov",
      phone: "785-296-4986"
    },

  ],

  "Kentucky": [

    // Government & Public Benefits Services
    {
      name: "Kentucky Department for Behavioral Health, Developmental and Intellectual Disabilities (DBHDID)",
      category: "government",
      description: "The primary state agency overseeing services for Kentuckians with intellectual and developmental disabilities; administers Medicaid waiver programs, service coordination, and community-based supports for eligible individuals and their families.",
      website: "https://dbhdid.ky.gov",
      phone: "502-564-4527"
    },
    {
      name: "Kentucky Council on Developmental Disabilities",
      category: "government",
      description: "Kentucky's federally mandated DD Council; funds advocacy, self-determination, and systems-change initiatives that improve independence and community inclusion for individuals with developmental disabilities and their families statewide.",
      website: "https://kcdd.ky.gov",
      phone: "502-564-7841"
    },
    {
      name: "Kentucky First Steps – Early Intervention Program",
      category: "government",
      description: "Kentucky's Part C IDEA program providing service coordination, therapies, and family supports for infants and toddlers (birth–age 3) with developmental delays or disabilities to build family capacity.",
      website: "https://chfs.ky.gov/firststeps",
      phone: "800-442-0087"
    },

    // Parent & Family Support Networks
    {
      name: "Kentucky Special Parent Involvement Network (KY-SPIN)",
      category: "parent-family",
      description: "Kentucky's federally designated Parent Training and Information (PTI) Center; provides free one-on-one support, IEP navigation, workshops, and peer mentoring to families of children with disabilities from birth through age 26 statewide, in English and Spanish.",
      website: "https://kyspin.com",
      phone: "800-525-7746"
    },
    {
      name: "Autism Society of Kentucky",
      category: "parent-family",
      description: "Statewide affiliate of the Autism Society of America; provides peer support, resource navigation, community events, and public education for families of individuals with autism across Kentucky.",
      website: "https://autismkytn.org",
      phone: "502-894-9090"
    },
    {
      name: "Family Voices Kentucky",
      category: "parent-family",
      description: "Kentucky's affiliate of the national Family Voices network; provides information, peer support, and resource navigation for families of children and youth with special health care needs, helping families navigate insurance and state service systems.",
      website: "https://familyvoicesky.org"
    },

    // Advocacy, Legal & Rights Protection
    {
      name: "Disability Rights Kentucky",
      category: "advocacy",
      description: "Kentucky's federally designated Protection and Advocacy (P&A) organization; provides free legal advocacy, investigations, and representation to protect the rights of Kentuckians with disabilities in areas including special education, Medicaid, abuse and neglect, and civil rights.",
      website: "https://drky.org",
      phone: "800-787-0040"
    },
    {
      name: "The Arc of Kentucky",
      category: "advocacy",
      description: "Statewide advocacy organization promoting the rights and full inclusion of individuals with intellectual and developmental disabilities; supports families through legislative advocacy, public education, and connection to local Arc chapters.",
      website: "https://arcofky.org",
      phone: "502-875-5225"
    },

    // Respite, Wellness & Specialized Caregiver Services
    {
      name: "Kentucky Lifespan Respite Coalition",
      category: "respite",
      description: "A statewide coalition coordinating respite care resources for family caregivers of individuals with disabilities of any age; provides caregiver education, provider training, and navigation to local respite services.",
      website: "https://kcdd.ky.gov"
    },
    {
      name: "DBHDID Medicaid Waiver – Respite Services",
      category: "respite",
      description: "Through Kentucky's Medicaid HCBS waivers, eligible families of individuals with developmental disabilities can access funded respite care to provide temporary caregiver relief and support long-term family stability.",
      website: "https://dbhdid.ky.gov",
      phone: "502-564-4527"
    },

  ],

  "Louisiana": [

    // Government & Public Benefits Services
    {
      name: "Louisiana Office for Citizens with Developmental Disabilities (OCDD)",
      category: "government",
      description: "The primary state agency providing community-based services, service coordination, and Medicaid waiver supports for Louisianans with developmental disabilities and their families through a statewide network of Human Services Districts and Authorities.",
      website: "https://ldh.la.gov/ocdd",
      phone: "800-229-4432"
    },
    {
      name: "Louisiana Developmental Disabilities Council",
      category: "government",
      description: "Louisiana's federally mandated DD Council; funds advocacy, self-determination, and systems-change initiatives that improve independence and community inclusion for individuals with developmental disabilities and their families statewide.",
      website: "https://laddc.org",
      phone: "225-342-6804"
    },
    {
      name: "Louisiana Early Steps – Early Intervention Program",
      category: "government",
      description: "Louisiana's Part C IDEA program providing service coordination, therapies, and family supports for infants and toddlers (birth–age 3) with developmental delays or disabilities through a statewide provider network.",
      website: "https://ldh.la.gov/earlysteps",
      phone: "800-922-3425"
    },

    // Parent & Family Support Networks
    {
      name: "Families Helping Families of Louisiana",
      category: "parent-family",
      description: "Louisiana's federally designated Parent Training and Information (PTI) Center and Family-to-Family Health Information Center; a statewide network of 8 regional centers staffed by parents of children with special needs, providing free IEP navigation, peer support, and resource referrals in English and Spanish.",
      website: "https://familyhelpingfamilies.com",
      phone: "800-766-7736"
    },
    {
      name: "Autism Society of Greater Baton Rouge",
      category: "parent-family",
      description: "Louisiana's primary Autism Society affiliate; provides peer support groups, resource navigation, community events, and advocacy assistance for families of individuals with autism across the Greater Baton Rouge area and statewide.",
      website: "https://autismbr.com",
      phone: "225-706-9556"
    },

    // Advocacy, Legal & Rights Protection
    {
      name: "Disability Rights Louisiana",
      category: "advocacy",
      description: "Louisiana's federally designated Protection and Advocacy (P&A) organization; provides free legal advocacy, investigations, and representation to protect the rights of Louisianans with disabilities in areas including special education, Medicaid, abuse and neglect, and civil rights.",
      website: "https://disabilityrightsla.org",
      phone: "800-960-7705"
    },
    {
      name: "The Arc of Louisiana",
      category: "advocacy",
      description: "Statewide advocacy organization promoting the rights and full inclusion of individuals with intellectual and developmental disabilities; supports families through legislative advocacy, public education, and connection to local Arc chapters.",
      website: "https://arcofla.com",
      phone: "225-383-0140"
    },

    // Respite, Wellness & Specialized Caregiver Services
    {
      name: "Louisiana Lifespan Respite Coalition",
      category: "respite",
      description: "A statewide coalition coordinating respite care resources for family caregivers of individuals with disabilities of any age; provides caregiver education, provider training, and navigation to local respite services.",
      website: "https://laddc.org"
    },
    {
      name: "OCDD New Opportunities Waiver – Respite Services",
      category: "respite",
      description: "Through Louisiana's Medicaid HCBS waivers, eligible families of individuals with developmental disabilities can access funded in-home and community-based respite care to provide temporary caregiver relief and support family stability.",
      website: "https://ldh.la.gov/ocdd",
      phone: "800-229-4432"
    },

  ],

  "Maine": [

    // Government & Public Benefits Services
    {
      name: "Maine Department of Health and Human Services – Office of Aging and Disability Services (OADS)",
      category: "government",
      description: "Administers Maine's Section 21 and Section 29 Medicaid waivers for adults with intellectual disabilities and autism, coordinating residential, day, and employment support services.",
      website: "https://www.maine.gov/dhhs/oads",
      phone: "207-287-9200"
    },
    {
      name: "Maine Developmental Services Oversight and Advisory Board (DSOAB)",
      category: "government",
      description: "Independent oversight body that monitors quality and safety of services for people with intellectual disabilities and autism in Maine, issuing reports and recommendations to the legislature.",
      website: "https://www.maine.gov/dhhs/oads/dsoab"
    },
    {
      name: "Maine Early Intervention – Child Development Services (CDS)",
      category: "government",
      description: "Provides early intervention services under IDEA Part C for children birth to age 3 with developmental delays or disabilities, including service coordination and family support.",
      website: "https://www.maine.gov/doe/cds",
      phone: "207-624-6650"
    },

    // Parent & Family Support Networks
    {
      name: "Maine Parent Federation (MPF)",
      category: "parent-family",
      description: "Statewide parent training and information center providing workshops, one-on-one assistance, and resources to families of children with disabilities navigating special education and services.",
      website: "https://www.maineparent.com",
      phone: "800-870-7746"
    },
    {
      name: "Autism Society of Maine",
      category: "parent-family",
      description: "Offers family support, social programs, and community events for individuals on the autism spectrum and their families, with a focus on building connections across Maine.",
      website: "https://www.autismsocietyofmaine.org",
      phone: "207-338-4404"
    },

    // Advocacy, Legal & Rights Protection
    {
      name: "Disability Rights Maine (DRM)",
      category: "advocacy",
      description: "Maine's federally designated Protection & Advocacy organization providing free legal assistance, advocacy, and self-advocacy training to people with disabilities, including autism.",
      website: "https://www.drme.org",
      phone: "207-626-2774"
    },
    {
      name: "Maine Council on Developmental Disabilities (MCDD)",
      category: "advocacy",
      description: "Federally funded council that advocates for systems change, community inclusion, and self-determination for Mainers with developmental disabilities and their families.",
      website: "https://www.mainecdd.org",
      phone: "207-287-4213"
    },

    // Respite, Wellness & Specialized Caregiver Services
    {
      name: "Maine Caregivers Support Network (MCSN)",
      category: "respite",
      description: "Provides education, peer support, and respite resources for family caregivers across Maine, helping them sustain their caregiving role and reduce burnout.",
      website: "https://mainecaregivers.org",
      phone: "877-624-0661"
    },
    {
      name: "The Opportunity Alliance – Respite Services",
      category: "respite",
      description: "Offers respite care and family support services in southern Maine for families caring for individuals with developmental disabilities, including autism spectrum disorder.",
      website: "https://www.opportunityalliance.org",
      phone: "207-874-1175"
    },

  ],

  "Maryland": [

    // Government & Public Benefits Services
    {
      name: "Maryland Developmental Disabilities Administration (DDA)",
      category: "government",
      description: "Administers Maryland's Community Pathways and Family Supports Medicaid waivers for individuals with developmental disabilities, including autism, providing residential, day, and employment services.",
      website: "https://dda.health.maryland.gov",
      phone: "410-402-9400"
    },
    {
      name: "Maryland State Department of Education – Division of Early Intervention and Special Education Services",
      category: "government",
      description: "Oversees special education and early intervention services statewide, ensuring children with disabilities including autism receive a free appropriate public education (FAPE).",
      website: "https://marylandpublicschools.org/programs/Pages/Special-Education",
      phone: "410-767-0238"
    },
    {
      name: "Maryland Infant and Toddlers Program (MITP)",
      category: "government",
      description: "Provides IDEA Part C early intervention services for children birth to age 3 with developmental delays or disabilities, including service coordination and family support plans.",
      website: "https://health.maryland.gov/mitp",
      phone: "410-767-5671"
    },

    // Parent & Family Support Networks
    {
      name: "The Parents' Place of Maryland",
      category: "parent-family",
      description: "Maryland's federally funded Parent Training and Information Center offering free guidance, workshops, and one-on-one support to families of children with disabilities navigating education and services.",
      website: "https://www.ppmd.org",
      phone: "410-768-9100"
    },
    {
      name: "Autism Society of Greater Baltimore",
      category: "parent-family",
      description: "Provides community support, social programs, family education events, and resource navigation for individuals with autism and their families in the greater Baltimore area.",
      website: "https://www.autismsociety-baltimore.org",
      phone: "410-655-7933"
    },

    // Advocacy, Legal & Rights Protection
    {
      name: "Disability Rights Maryland (DRM)",
      category: "advocacy",
      description: "Maryland's federally designated Protection & Advocacy organization providing free legal services, investigations, and self-advocacy support to people with disabilities, including autism.",
      website: "https://www.disabilityrightsmd.org",
      phone: "410-727-6352"
    },
    {
      name: "Maryland Developmental Disabilities Council (MDDC)",
      category: "advocacy",
      description: "Federally funded council that promotes systems change, community inclusion, and self-determination for Marylanders with developmental disabilities through advocacy, education, and grants.",
      website: "https://mddc.maryland.gov",
      phone: "410-333-3686"
    },

    // Respite, Wellness & Specialized Caregiver Services
    {
      name: "Maryland Family Network – Judy Centers",
      category: "respite",
      description: "Community hubs offering family support, parenting resources, and connections to respite and early childhood services for families of children with developmental needs across Maryland.",
      website: "https://marylandfamilynetwork.org",
      phone: "410-576-9669"
    },
    {
      name: "Therapeutic Recreation Inclusion Services (TRIS) – Maryland",
      category: "respite",
      description: "Offers inclusive recreation programs and respite activities for children and adults with autism and other developmental disabilities in Maryland communities.",
      website: "https://www.pgparks.com/tris",
      phone: "301-446-3388"
    },

  ],

  "Massachusetts": [

    // Government & Public Benefits Services
    {
      name: "Massachusetts Department of Developmental Services (DDS)",
      category: "government",
      description: "Administers Medicaid waivers and state-funded services for adults and children with intellectual and developmental disabilities, including autism, providing residential, employment, and family support.",
      website: "https://www.mass.gov/dds",
      phone: "617-727-5608"
    },
    {
      name: "Massachusetts Early Intervention Program",
      category: "government",
      description: "Provides IDEA Part C services for children birth to age 3 with developmental delays or disabilities, including service coordination, therapy, and family support through local provider agencies.",
      website: "https://www.mass.gov/early-intervention",
      phone: "617-624-5070"
    },
    {
      name: "Massachusetts Department of Elementary and Secondary Education – Special Education",
      category: "government",
      description: "Oversees special education services under IDEA for students with disabilities including autism, providing guidance, monitoring, and dispute resolution supports for families.",
      website: "https://www.doe.mass.edu/sped",
      phone: "781-338-3000"
    },

    // Parent & Family Support Networks
    {
      name: "Federation for Children with Special Needs (FCSN)",
      category: "parent-family",
      description: "Massachusetts' federally funded Parent Training and Information Center offering free training, information, and support to families of children with disabilities navigating education and services.",
      website: "https://fcsn.org",
      phone: "617-236-7210"
    },
    {
      name: "Autism Alliance of MetroWest",
      category: "parent-family",
      description: "Provides family support, social skills programs, and community connections for individuals with autism and their families in the greater MetroWest region of Massachusetts.",
      website: "https://autismalliancemetrowest.org",
      phone: "508-879-0727"
    },

    // Advocacy, Legal & Rights Protection
    {
      name: "Disability Law Center (DLC) – Massachusetts",
      category: "advocacy",
      description: "Massachusetts' federally designated Protection & Advocacy organization providing free legal assistance, investigations, and advocacy for people with disabilities, including autism.",
      website: "https://www.dlc-ma.org",
      phone: "617-723-8455"
    },
    {
      name: "Massachusetts Developmental Disabilities Council (MDDC)",
      category: "advocacy",
      description: "Federally funded council advocating for systems change, community inclusion, and self-determination for people with developmental disabilities across Massachusetts.",
      website: "https://www.mass.gov/mddc",
      phone: "617-770-7676"
    },

    // Respite, Wellness & Specialized Caregiver Services
    {
      name: "Massachusetts Families Organizing for Change (MFOFC)",
      category: "respite",
      description: "Family-led organization providing peer support, family advocacy, and navigation of respite and community services for families of individuals with developmental disabilities.",
      website: "https://www.mfofc.org",
      phone: "781-221-9699"
    },
    {
      name: "Autism Resource Center of Central Massachusetts (ARC)",
      category: "respite",
      description: "Offers respite, family support, and recreational programs for individuals with autism and their caregivers in central Massachusetts, helping families build community connections.",
      website: "https://autism-resource.org",
      phone: "508-835-4278"
    },

  ],

  "Michigan": [

    // Government & Public Benefits Services
    {
      name: "Michigan Department of Health and Human Services – Developmental Disabilities",
      category: "government",
      description: "Administers Michigan's Medicaid Home and Community-Based Services waivers for individuals with developmental disabilities, including autism, coordinating residential, respite, and community support services.",
      website: "https://www.michigan.gov/mdhhs/keep-mi-healthy/mentalhealth/developmental-disabilities",
      phone: "517-335-3723"
    },
    {
      name: "Michigan Early On Program",
      category: "government",
      description: "Michigan's IDEA Part C early intervention system serving children birth to age 3 with developmental delays, providing service coordination, therapies, and family support through local early intervention agencies.",
      website: "https://www.michigan.gov/mde/early-on",
      phone: "800-327-5966"
    },
    {
      name: "Michigan Department of Education – Special Education",
      category: "government",
      description: "Oversees special education programs statewide, ensuring students with disabilities including autism receive appropriate services, and provides dispute resolution and compliance monitoring.",
      website: "https://www.michigan.gov/mde/services/special-edu",
      phone: "517-373-0923"
    },

    // Parent & Family Support Networks
    {
      name: "Michigan Alliance for Families",
      category: "parent-family",
      description: "Michigan's federally funded Parent Training and Information Center offering free resources, workshops, and one-on-one support to families of children with disabilities navigating special education.",
      website: "https://www.michiganallianceforfamilies.org",
      phone: "800-552-4821"
    },
    {
      name: "Autism Alliance of Michigan (AAoM)",
      category: "parent-family",
      description: "Provides family navigation, community programs, and advocacy for individuals with autism and their families across Michigan, including the ECHO Autism program for healthcare providers.",
      website: "https://autismallianceofmichigan.org",
      phone: "877-463-2287"
    },

    // Advocacy, Legal & Rights Protection
    {
      name: "Disability Rights Michigan (DRM)",
      category: "advocacy",
      description: "Michigan's federally designated Protection & Advocacy organization providing free legal services, investigations, and systemic advocacy for people with disabilities, including autism.",
      website: "https://www.drmich.org",
      phone: "800-288-5923"
    },
    {
      name: "Michigan Developmental Disabilities Council (MDDC)",
      category: "advocacy",
      description: "Federally funded council promoting independence, self-determination, and community inclusion for Michiganders with developmental disabilities through advocacy, grants, and systems change.",
      website: "https://www.michigan.gov/mddc",
      phone: "517-335-3158"
    },

    // Respite, Wellness & Specialized Caregiver Services
    {
      name: "The Arc Michigan",
      category: "respite",
      description: "Statewide advocacy and support organization providing family resources, respite navigation, and community programs for individuals with intellectual and developmental disabilities including autism.",
      website: "https://www.arcmichigan.org",
      phone: "517-487-5426"
    },
    {
      name: "Lutheran Social Services of Michigan – Autism & Developmental Disabilities",
      category: "respite",
      description: "Offers respite, residential support, and community integration services for individuals with autism and developmental disabilities and their families across Michigan.",
      website: "https://www.lssm.org",
      phone: "800-515-1116"
    },

  ],

  "Minnesota": [

    // Government & Public Benefits Services
    {
      name: "Minnesota Department of Human Services – Disability Services Division",
      category: "government",
      description: "Administers Medicaid Home and Community-Based Services waivers for individuals with developmental disabilities, including autism, funding residential, day, employment, and family support services.",
      website: "https://mn.gov/dhs/people-we-serve/people-with-disabilities",
      phone: "651-431-2225"
    },
    {
      name: "Minnesota Department of Education – Special Education",
      category: "government",
      description: "Oversees special education for students with disabilities statewide, providing guidance on IEPs, due process rights, and compliance monitoring for families of children with autism.",
      website: "https://education.mn.gov/MDE/dse/sped",
      phone: "651-582-8289"
    },
    {
      name: "Minnesota Early Intervention Program",
      category: "government",
      description: "Coordinates IDEA Part C services for children birth to age 3 with developmental delays, connecting families to service coordinators, therapies, and family support plans.",
      website: "https://mn.gov/dhs/early-intervention",
      phone: "651-431-2225"
    },

    // Parent & Family Support Networks
    {
      name: "PACER Center",
      category: "parent-family",
      description: "Minnesota's federally funded Parent Training and Information Center offering workshops, publications, and one-on-one support for families of children with disabilities, including autism.",
      website: "https://www.pacer.org",
      phone: "952-838-9000"
    },
    {
      name: "Autism Society of Minnesota (AuSM)",
      category: "parent-family",
      description: "Provides education, advocacy, and community programs for individuals with autism and their families, including support groups, camps, and an annual autism conference.",
      website: "https://ausm.org",
      phone: "651-647-1083"
    },

    // Advocacy, Legal & Rights Protection
    {
      name: "Disability Rights Minnesota",
      category: "advocacy",
      description: "Minnesota's federally designated Protection & Advocacy organization providing free legal assistance and advocacy for people with disabilities, including those with autism.",
      website: "https://www.disabilityrightsmn.org",
      phone: "612-334-5970"
    },
    {
      name: "Minnesota Governor's Council on Developmental Disabilities",
      category: "advocacy",
      description: "Federally funded council promoting self-determination, independence, and community inclusion for Minnesotans with developmental disabilities through grants, education, and advocacy.",
      website: "https://mn.gov/mnddc",
      phone: "651-296-4018"
    },

    // Respite, Wellness & Specialized Caregiver Services
    {
      name: "The Arc Minnesota",
      category: "respite",
      description: "Statewide organization supporting individuals with intellectual and developmental disabilities, offering family resources, respite navigation, and community connection programs.",
      website: "https://arcminnesota.org",
      phone: "612-523-0823"
    },
    {
      name: "Fraser – Autism and Developmental Disabilities Services",
      category: "respite",
      description: "Provides respite care, behavioral health, and community support services for children and adults with autism and developmental disabilities across the Twin Cities and greater Minnesota.",
      website: "https://www.fraser.org",
      phone: "612-861-1688"
    },

  ],

  "Mississippi": [

    // Government & Public Benefits Services
    {
      name: "Mississippi Department of Mental Health – Bureau of Intellectual and Developmental Disabilities",
      category: "government",
      description: "Administers Medicaid HCBS waivers and coordinates residential, day, and family support services for Mississippians with intellectual and developmental disabilities, including autism.",
      website: "https://www.dmh.ms.gov/service-area/intellectual-developmental-disabilities",
      phone: "601-359-1288"
    },
    {
      name: "Mississippi Department of Education – Office of Special Education",
      category: "government",
      description: "Oversees IDEA implementation statewide, ensuring students with disabilities including autism receive a free appropriate public education and supporting families through the IEP process.",
      website: "https://www.mdek12.org/OSE",
      phone: "601-359-3498"
    },
    {
      name: "Mississippi First Steps Early Intervention Program",
      category: "government",
      description: "Mississippi's IDEA Part C program connecting families of children birth to age 3 with developmental delays to service coordinators, therapies, and individualized family service plans.",
      website: "https://www.mdh.ms.gov/first-steps",
      phone: "601-576-7427"
    },

    // Parent & Family Support Networks
    {
      name: "Mississippi Parent Training and Information Center (MPTIC)",
      category: "parent-family",
      description: "Federally funded center providing free training, information, and support to families of children with disabilities in Mississippi navigating special education and related services.",
      website: "https://www.mptic.org",
      phone: "800-231-3721"
    },
    {
      name: "Autism Society of Mississippi",
      category: "parent-family",
      description: "Offers community events, support groups, and resource navigation for individuals with autism and their families across Mississippi.",
      website: "https://autismsocietyofms.com",
      phone: "601-987-0088"
    },

    // Advocacy, Legal & Rights Protection
    {
      name: "Disability Rights Mississippi",
      category: "advocacy",
      description: "Mississippi's federally designated Protection & Advocacy organization providing free legal services, investigations, and advocacy for Mississippians with disabilities, including autism.",
      website: "https://www.drms.ms.gov",
      phone: "800-772-4057"
    },
    {
      name: "Mississippi Council on Developmental Disabilities",
      category: "advocacy",
      description: "Federally funded council promoting systems change, community inclusion, and self-determination for Mississippians with developmental disabilities through advocacy and grants.",
      website: "https://www.mcdd.ms.gov",
      phone: "601-359-1270"
    },

    // Respite, Wellness & Specialized Caregiver Services
    {
      name: "The Arc of Mississippi",
      category: "respite",
      description: "Advocates for and supports individuals with intellectual and developmental disabilities, offering family resources, respite navigation, and community programs statewide.",
      website: "https://www.thearcofms.com",
      phone: "601-982-1180"
    },
    {
      name: "Gulf Coast Autism Center",
      category: "respite",
      description: "Provides behavioral therapy, social skills programming, and family respite supports for individuals with autism and their caregivers in the Gulf Coast region of Mississippi.",
      website: "https://www.gulfcoastautismcenter.com",
      phone: "228-365-0205"
    },

  ],

  "Missouri": [

    // Government & Public Benefits Services
    {
      name: "Missouri Division of Developmental Disabilities (DD)",
      category: "government",
      description: "Administers Missouri's Medicaid HCBS waivers and state-funded services for individuals with developmental disabilities, including autism, supporting residential, day, and employment programs.",
      website: "https://dmh.mo.gov/dev-disabilities",
      phone: "573-751-8676"
    },
    {
      name: "Missouri Department of Elementary and Secondary Education – Special Education",
      category: "government",
      description: "Oversees IDEA compliance and special education services for Missouri students with disabilities, providing guidance on IEPs, dispute resolution, and family rights.",
      website: "https://dese.mo.gov/special-education",
      phone: "573-751-2965"
    },
    {
      name: "Missouri First Steps Early Intervention Program",
      category: "government",
      description: "Missouri's IDEA Part C program providing early intervention services for children birth to age 3 with developmental delays, including service coordination and family support plans.",
      website: "https://health.mo.gov/living/families/firststeps",
      phone: "866-583-2392"
    },

    // Parent & Family Support Networks
    {
      name: "Missouri Parents Act (MPACT)",
      category: "parent-family",
      description: "Missouri's federally funded Parent Training and Information Center providing free advocacy, training, and one-on-one support to families of children with disabilities navigating special education.",
      website: "https://www.ptimpact.org",
      phone: "800-743-7634"
    },
    {
      name: "Autism Society of the Heartland",
      category: "parent-family",
      description: "Offers support groups, community events, and resource navigation for individuals with autism and their families in the greater Kansas City and Missouri region.",
      website: "https://autismheartland.org",
      phone: "913-706-0042"
    },

    // Advocacy, Legal & Rights Protection
    {
      name: "Missouri Protection & Advocacy Services (MO P&A)",
      category: "advocacy",
      description: "Missouri's federally designated Protection & Advocacy organization providing free legal services and systemic advocacy for Missourians with disabilities, including autism.",
      website: "https://moadvocacy.org",
      phone: "800-392-8667"
    },
    {
      name: "Missouri Developmental Disabilities Council",
      category: "advocacy",
      description: "Federally funded council promoting independence, self-determination, and community inclusion for Missourians with developmental disabilities through advocacy and systems change.",
      website: "https://moddcouncil.org",
      phone: "573-751-8611"
    },

    // Respite, Wellness & Specialized Caregiver Services
    {
      name: "The Arc of Missouri",
      category: "respite",
      description: "Statewide organization supporting individuals with intellectual and developmental disabilities and their families, offering respite resources, advocacy, and community programs.",
      website: "https://www.thearcofmo.org",
      phone: "573-893-2980"
    },
    {
      name: "Great Circle – Missouri",
      category: "respite",
      description: "Provides behavioral health, respite, and family support services for children and families across Missouri, including specialized supports for individuals with autism.",
      website: "https://www.greatcircle.org",
      phone: "314-919-4700"
    },

  ],

  "Montana": [

    // Government & Public Benefits Services
    {
      name: "Montana Department of Public Health and Human Services – Developmental Services Division",
      category: "government",
      description: "Administers Montana's Medicaid HCBS waivers and Comprehensive Developmental Disability services for individuals with developmental disabilities, including autism.",
      website: "https://dphhs.mt.gov/developmentalservicesdivision",
      phone: "406-444-2590"
    },
    {
      name: "Montana Office of Public Instruction – Special Education",
      category: "government",
      description: "Oversees IDEA compliance and special education services for Montana students with disabilities, supporting families in accessing IEP services and navigating disability rights.",
      website: "https://opi.mt.gov/Educators/Teaching-Learning/Special-Education",
      phone: "406-444-4429"
    },
    {
      name: "Montana Developmental Disabilities Program – Early Intervention",
      category: "government",
      description: "Provides IDEA Part C early intervention services for children birth to age 3 with developmental delays, including service coordination and family support in Montana.",
      website: "https://dphhs.mt.gov/developmentalservicesdivision/earlyintervention",
      phone: "406-444-2590"
    },

    // Parent & Family Support Networks
    {
      name: "Parents Let's Unite for Kids (PLUK)",
      category: "parent-family",
      description: "Montana's federally funded Parent Training and Information Center offering free training, information, and one-on-one support to families of children with disabilities navigating education and services.",
      website: "https://www.pluk.org",
      phone: "800-222-7585"
    },
    {
      name: "Montana Autism Education Project",
      category: "parent-family",
      description: "Provides training, consultation, and resources for families and educators of students with autism spectrum disorder across Montana.",
      website: "https://mtautism.umt.edu",
      phone: "406-243-5467"
    },

    // Advocacy, Legal & Rights Protection
    {
      name: "Disability Rights Montana",
      category: "advocacy",
      description: "Montana's federally designated Protection & Advocacy organization providing free legal services and advocacy for Montanans with disabilities, including those with autism.",
      website: "https://www.disabilityrightsmt.org",
      phone: "800-245-4743"
    },
    {
      name: "Montana Developmental Disabilities Council",
      category: "advocacy",
      description: "Federally funded council promoting self-determination, community inclusion, and systems change for Montanans with developmental disabilities through advocacy and grants.",
      website: "https://mtddc.org",
      phone: "406-443-4332"
    },

    // Respite, Wellness & Specialized Caregiver Services
    {
      name: "Families Achieving Community Together (FACT) – Montana",
      category: "respite",
      description: "Provides family support, respite navigation, and peer connections for caregivers of individuals with developmental disabilities across Montana.",
      website: "https://dphhs.mt.gov/developmentalservicesdivision/familysupport",
      phone: "406-444-2590"
    },
    {
      name: "RuraLink – Montana Center for Inclusive Communities",
      category: "respite",
      description: "Offers respite care coordination, caregiver training, and community support services for families of individuals with disabilities in rural Montana communities.",
      website: "https://ruralink.umt.edu",
      phone: "406-243-2454"
    },

  ],

  "Nebraska": [

    // Government & Public Benefits Services
    {
      name: "Nebraska Division of Developmental Disabilities (DHHS)",
      category: "government",
      description: "Administers Medicaid waivers and state-funded services for Nebraskans with developmental disabilities, including autism, supporting day programs, residential, and family support.",
      website: "https://dhhs.ne.gov/Pages/Developmental-Disabilities.aspx",
      phone: "402-471-9108"
    },
    {
      name: "Nebraska Department of Education – Special Education",
      category: "government",
      description: "Oversees special education programs under IDEA for Nebraska students with disabilities, providing compliance monitoring, dispute resolution, and family guidance.",
      website: "https://www.education.ne.gov/sped",
      phone: "402-471-2471"
    },
    {
      name: "Nebraska's Early Development Network (EDN)",
      category: "government",
      description: "Nebraska's IDEA Part C early intervention program connecting families of children birth to age 3 with developmental delays to therapies, service coordination, and family support plans.",
      website: "https://www.education.ne.gov/sped/early-development-network",
      phone: "402-471-0016"
    },

    // Parent & Family Support Networks
    {
      name: "PTI Nebraska (Parent Training and Information Center)",
      category: "parent-family",
      description: "Federally funded center providing free training, advocacy coaching, and individualized support to Nebraska families of children with disabilities navigating education and services.",
      website: "https://www.pti-nebraska.org",
      phone: "402-346-0525"
    },
    {
      name: "Autism Society of Nebraska",
      category: "parent-family",
      description: "Offers family support, community events, and resource navigation for individuals with autism and their families across Nebraska.",
      website: "https://www.autismsocietyofnebraska.org",
      phone: "402-853-4003"
    },

    // Advocacy, Legal & Rights Protection
    {
      name: "Disability Rights Nebraska",
      category: "advocacy",
      description: "Nebraska's federally designated Protection & Advocacy organization providing free legal services, investigations, and advocacy for Nebraskans with disabilities, including autism.",
      website: "https://www.disabilityrightsnebraska.org",
      phone: "402-474-3183"
    },
    {
      name: "Nebraska Developmental Disabilities Council",
      category: "advocacy",
      description: "Federally funded council promoting self-determination, independence, and community inclusion for Nebraskans with developmental disabilities through advocacy and systems change.",
      website: "https://www.nedd.nebraska.gov",
      phone: "402-471-2117"
    },

    // Respite, Wellness & Specialized Caregiver Services
    {
      name: "The Arc of Nebraska",
      category: "respite",
      description: "Provides advocacy, family resources, and community support for individuals with intellectual and developmental disabilities and their families across Nebraska.",
      website: "https://www.arc-nebraska.org",
      phone: "402-475-4407"
    },
    {
      name: "Autism Family Network of Nebraska",
      category: "respite",
      description: "Peer-support network offering family connections, respite resources, and community events for caregivers of individuals with autism across Nebraska.",
      website: "https://autismfamilynetwork.org",
      phone: "402-932-0087"
    },

  ],

  "Nevada": [

    // Government & Public Benefits Services
    {
      name: "Nevada Division of Public and Behavioral Health – Developmental Services",
      category: "government",
      description: "Administers Nevada's Medicaid HCBS waivers and state developmental services for individuals with intellectual and developmental disabilities, including autism.",
      website: "https://dpbh.nv.gov/Programs/ClinicalPrgms/Developmental_Services/Developmental_Services_-_Home",
      phone: "775-687-5943"
    },
    {
      name: "Nevada Department of Education – Office of Special Education",
      category: "government",
      description: "Oversees IDEA compliance and special education services for Nevada students with disabilities, providing guidance on IEPs and family rights for students including those with autism.",
      website: "https://doe.nv.gov/Students_Families/Special_Education",
      phone: "702-486-6458"
    },
    {
      name: "Nevada Early Intervention Services (NEIS)",
      category: "government",
      description: "Nevada's IDEA Part C program providing early intervention services for children birth to age 3 with developmental delays, including service coordination and family supports.",
      website: "https://dpbh.nv.gov/Programs/ClinicalPrgms/NEIS/Nevada_Early_Intervention_Services_-_Home",
      phone: "775-684-3388"
    },

    // Parent & Family Support Networks
    {
      name: "Nevada PEP (Parents Encouraging Parents)",
      category: "parent-family",
      description: "Nevada's federally funded Parent Training and Information Center offering free workshops, advocacy coaching, and resources for families of children with disabilities navigating schools and services.",
      website: "https://www.nvpep.org",
      phone: "702-388-8899"
    },
    {
      name: "Autism Coalition of Nevada",
      category: "parent-family",
      description: "Statewide coalition providing community support, awareness events, and resource navigation for individuals with autism and their families across Nevada.",
      website: "https://autismcoalitionofnevada.org",
      phone: "702-395-0163"
    },

    // Advocacy, Legal & Rights Protection
    {
      name: "Disability Rights Nevada",
      category: "advocacy",
      description: "Nevada's federally designated Protection & Advocacy organization providing free legal services and advocacy for Nevadans with disabilities, including those on the autism spectrum.",
      website: "https://www.disabilityrightsnevada.org",
      phone: "702-257-8150"
    },
    {
      name: "Nevada Governor's Council on Developmental Disabilities",
      category: "advocacy",
      description: "Federally funded council promoting community inclusion, self-determination, and systems change for Nevadans with developmental disabilities through advocacy and grants.",
      website: "https://gcdd.nv.gov",
      phone: "775-687-4452"
    },

    // Respite, Wellness & Specialized Caregiver Services
    {
      name: "The Arc of Nevada",
      category: "respite",
      description: "Provides advocacy, family support, and respite resources for individuals with intellectual and developmental disabilities and their families across Nevada.",
      website: "https://www.arcnv.org",
      phone: "702-870-7050"
    },
    {
      name: "Nevada Caregiver Support Center",
      category: "respite",
      description: "Offers respite referrals, caregiver education, and support group connections for families caring for individuals with disabilities across Nevada communities.",
      website: "https://adsd.nv.gov/Programs/Aging/CSP/Caregiver_Support_Pgm",
      phone: "800-216-3184"
    },

  ],

  "New Hampshire": [

    // Government & Public Benefits Services
    {
      name: "New Hampshire Bureau of Developmental Services (BDS)",
      category: "government",
      description: "Administers New Hampshire's area agency system and Medicaid HCBS waivers for individuals with developmental disabilities and autism, coordinating residential, employment, and family support.",
      website: "https://www.dhhs.nh.gov/programs-services/developmental-disabilities",
      phone: "603-271-5034"
    },
    {
      name: "New Hampshire Department of Education – Bureau of Special Education",
      category: "government",
      description: "Oversees IDEA compliance and special education services for New Hampshire students with disabilities, providing family guidance, dispute resolution, and compliance monitoring.",
      website: "https://www.education.nh.gov/who-we-are/division-of-learner-support/bureau-of-special-education",
      phone: "603-271-3741"
    },
    {
      name: "NH Early Supports and Services (Part C)",
      category: "government",
      description: "New Hampshire's IDEA Part C early intervention program connecting families of children birth to age 3 with developmental delays to service coordinators and individualized family support plans.",
      website: "https://www.dhhs.nh.gov/programs-services/developmental-disabilities/early-supports-and-services",
      phone: "603-271-5122"
    },

    // Parent & Family Support Networks
    {
      name: "Parent Information Center (PIC-NH)",
      category: "parent-family",
      description: "New Hampshire's federally funded Parent Training and Information Center providing free workshops, advocacy support, and one-on-one assistance to families of children with disabilities.",
      website: "https://www.picnh.org",
      phone: "603-224-7005"
    },
    {
      name: "Autism Society of New Hampshire",
      category: "parent-family",
      description: "Provides support groups, community events, and resource connections for individuals with autism and their families throughout New Hampshire.",
      website: "https://autismnh.org",
      phone: "603-679-2424"
    },

    // Advocacy, Legal & Rights Protection
    {
      name: "Disability Rights Center – NH",
      category: "advocacy",
      description: "New Hampshire's federally designated Protection & Advocacy organization providing free legal services, investigations, and systemic advocacy for Granite Staters with disabilities.",
      website: "https://drcnh.org",
      phone: "603-228-0432"
    },
    {
      name: "New Hampshire Council on Developmental Disabilities",
      category: "advocacy",
      description: "Federally funded council advocating for self-determination, community inclusion, and systems change for New Hampshirites with developmental disabilities.",
      website: "https://www.nhcdd.org",
      phone: "603-271-3236"
    },

    // Respite, Wellness & Specialized Caregiver Services
    {
      name: "Easter Seals New Hampshire",
      category: "respite",
      description: "Provides respite, adult day programs, and community support services for individuals with autism and developmental disabilities and their families across New Hampshire.",
      website: "https://www.eastersealsnh.org",
      phone: "603-621-3000"
    },
    {
      name: "NFI North – Family Support Services",
      category: "respite",
      description: "Offers in-home respite, family support coordination, and community integration services for individuals with developmental disabilities across New Hampshire.",
      website: "https://www.nfinorth.com",
      phone: "800-346-6229"
    },

  ],

  "New Jersey": [

    // Government & Public Benefits Services
    {
      name: "New Jersey Division of Developmental Disabilities (DDD)",
      category: "government",
      description: "Administers New Jersey's Medicaid Community Care waiver and state-funded services for adults with developmental disabilities, including autism, supporting residential, day, and employment programs.",
      website: "https://www.nj.gov/humanservices/ddd",
      phone: "800-832-9173"
    },
    {
      name: "New Jersey Department of Education – Office of Special Education",
      category: "government",
      description: "Oversees IDEA compliance, IEP implementation, and family rights for New Jersey students with disabilities including autism, with complaint investigation and mediation services.",
      website: "https://www.nj.gov/education/specialed",
      phone: "609-376-3800"
    },
    {
      name: "New Jersey Early Intervention System (NJEIS)",
      category: "government",
      description: "New Jersey's IDEA Part C program connecting families of children birth to age 3 with developmental delays to service coordinators, therapies, and family support plans.",
      website: "https://www.nj.gov/health/fhs/eis",
      phone: "609-777-7734"
    },

    // Parent & Family Support Networks
    {
      name: "Statewide Parent Advocacy Network (SPAN)",
      category: "parent-family",
      description: "New Jersey's federally funded Parent Training and Information Center providing free education, advocacy coaching, and support for families of children with disabilities navigating schools and services.",
      website: "https://www.spanadvocacy.org",
      phone: "800-654-7726"
    },
    {
      name: "Autism New Jersey",
      category: "parent-family",
      description: "Comprehensive statewide resource offering family support, professional training, public awareness, and a helpline for individuals with autism and their families in New Jersey.",
      website: "https://www.autismnj.org",
      phone: "800-428-8476"
    },

    // Advocacy, Legal & Rights Protection
    {
      name: "Disability Rights New Jersey",
      category: "advocacy",
      description: "New Jersey's federally designated Protection & Advocacy organization providing free legal services, investigations, and systemic advocacy for New Jerseyans with disabilities, including autism.",
      website: "https://www.drnj.org",
      phone: "800-922-7233"
    },
    {
      name: "New Jersey Council on Developmental Disabilities",
      category: "advocacy",
      description: "Federally funded council promoting systems change, self-determination, and community inclusion for New Jerseyans with developmental disabilities through advocacy and grants.",
      website: "https://njcdd.org",
      phone: "609-292-3745"
    },

    // Respite, Wellness & Specialized Caregiver Services
    {
      name: "Easterseals New Jersey",
      category: "respite",
      description: "Provides respite, adult day programs, and community support services for individuals with autism and developmental disabilities and their families throughout New Jersey.",
      website: "https://nj.easterseals.com",
      phone: "732-257-6662"
    },
    {
      name: "Family Resource Network (FRN) – New Jersey",
      category: "respite",
      description: "Offers family support, respite coordination, and peer connections for families of individuals with developmental disabilities across New Jersey.",
      website: "https://www.familyresource.org",
      phone: "732-506-6858"
    },

  ],

  "New Mexico": [

    // Government & Public Benefits Services
    {
      name: "New Mexico Developmental Disabilities Supports Division (DDSD)",
      category: "government",
      description: "Administers New Mexico's Mi Via and Developmental Disabilities Medicaid waivers for individuals with developmental disabilities, including autism, funding person-centered support services.",
      website: "https://www.hsd.state.nm.us/ddsd",
      phone: "505-476-8973"
    },
    {
      name: "New Mexico Public Education Department – Special Education Bureau",
      category: "government",
      description: "Oversees IDEA compliance and special education for New Mexico students with disabilities, providing guidance, dispute resolution, and family support resources.",
      website: "https://webnew.ped.state.nm.us/bureaus/special-education",
      phone: "505-827-1457"
    },
    {
      name: "New Mexico Family Infant Toddler (FIT) Program",
      category: "government",
      description: "New Mexico's IDEA Part C early intervention program providing services for children birth to age 3 with developmental delays, including service coordination and family support plans.",
      website: "https://www.nmfit.org",
      phone: "505-476-0364"
    },

    // Parent & Family Support Networks
    {
      name: "Parents Reaching Out (PRO)",
      category: "parent-family",
      description: "New Mexico's federally funded Parent Training and Information Center offering free advocacy training, workshops, and individualized support for families of children with disabilities.",
      website: "https://www.parentsreachingout.org",
      phone: "800-524-5176"
    },
    {
      name: "Autism Society of New Mexico",
      category: "parent-family",
      description: "Provides community support, resource navigation, and awareness events for individuals with autism and their families throughout New Mexico.",
      website: "https://www.autismsocietynm.org",
      phone: "505-217-8699"
    },

    // Advocacy, Legal & Rights Protection
    {
      name: "Disability Rights New Mexico",
      category: "advocacy",
      description: "New Mexico's federally designated Protection & Advocacy organization providing free legal services and advocacy for New Mexicans with disabilities, including those on the autism spectrum.",
      website: "https://www.drnm.org",
      phone: "800-432-4682"
    },
    {
      name: "New Mexico Developmental Disabilities Planning Council",
      category: "advocacy",
      description: "Federally funded council promoting self-determination, community inclusion, and systems change for New Mexicans with developmental disabilities through advocacy and grants.",
      website: "https://nmddpc.com",
      phone: "505-827-7590"
    },

    // Respite, Wellness & Specialized Caregiver Services
    {
      name: "Adelante Development Center",
      category: "respite",
      description: "Provides day habilitation, respite, and community support services for adults with developmental disabilities and autism in the Albuquerque area and surrounding communities.",
      website: "https://www.adelante.org",
      phone: "505-243-1097"
    },
    {
      name: "New Mexico Caregiver Coalition – Respite Resources",
      category: "respite",
      description: "Connects family caregivers of individuals with disabilities to respite care options and support resources across New Mexico, including training and peer networks.",
      website: "https://nmaging.state.nm.us",
      phone: "866-451-2901"
    },

  ],

  "New York": [

    // Government & Public Benefits Services
    {
      name: "NYS Office for People With Developmental Disabilities (OPWDD)",
      category: "government",
      description: "Administers New York's Home and Community Based Services waivers and coordinates a comprehensive system of supports for individuals with developmental disabilities, including autism, across the state.",
      website: "https://opwdd.ny.gov",
      phone: "518-473-1997"
    },
    {
      name: "NYS Education Department – Special Education",
      category: "government",
      description: "Oversees IDEA compliance and special education for New York students with disabilities, supporting families through the IEP process, complaint procedures, and impartial hearings.",
      website: "https://www.nysed.gov/special-education",
      phone: "518-473-2878"
    },
    {
      name: "NYS Early Intervention Program",
      category: "government",
      description: "New York's IDEA Part C program providing early intervention services for children birth to age 3 with developmental delays, coordinated through local health departments.",
      website: "https://www.health.ny.gov/community/infants_children/early_intervention",
      phone: "518-473-7016"
    },

    // Parent & Family Support Networks
    {
      name: "Resources for Children with Special Needs",
      category: "parent-family",
      description: "New York City-based organization providing information, training, and advocacy for families of children with disabilities navigating special education and related services.",
      website: "https://www.resourcesnyc.org",
      phone: "212-677-4650"
    },
    {
      name: "Autism Society of Greater New York",
      category: "parent-family",
      description: "Provides community programs, support groups, and resource navigation for individuals with autism and their families in the greater New York metropolitan area.",
      website: "https://www.autismny.org",
      phone: "718-863-4455"
    },

    // Advocacy, Legal & Rights Protection
    {
      name: "Disability Rights New York (DRNY)",
      category: "advocacy",
      description: "New York's federally designated Protection & Advocacy organization providing free legal services, investigations, and systemic advocacy for New Yorkers with disabilities, including autism.",
      website: "https://www.drny.org",
      phone: "518-432-7861"
    },
    {
      name: "NYS Developmental Disabilities Planning Council (DDPC)",
      category: "advocacy",
      description: "Federally funded council advocating for self-determination, community inclusion, and systems change for New Yorkers with developmental disabilities through grants and policy work.",
      website: "https://ddpc.ny.gov",
      phone: "518-486-7505"
    },

    // Respite, Wellness & Specialized Caregiver Services
    {
      name: "AutismUp",
      category: "respite",
      description: "Provides inclusive recreational programs, social skills groups, and respite opportunities for individuals with autism and their families across western New York.",
      website: "https://www.autismup.org",
      phone: "585-736-0870"
    },
    {
      name: "New York Foundling – Autism and Developmental Disabilities Services",
      category: "respite",
      description: "Offers residential respite, family support, and community habilitation services for individuals with autism and developmental disabilities in the New York metro area.",
      website: "https://www.nyfoundling.org",
      phone: "212-870-3333"
    },
    {
      name: "David's Refuge",
      category: "respite",
      description: "Provides respite retreats and ongoing support for parents and guardians of children with special needs, offering a community of care, renewal, and connection for caregivers across New York.",
      website: "https://www.davidsrefuge.org",
      phone: "315-682-5644"
    },
    {
      name: "Long Island Advocacy Center",
      category: "advocacy",
      description: "Provides legal advocacy, systems navigation, and support services for individuals with disabilities and their families on Long Island, helping them access education, housing, and community resources.",
      website: "https://www.longislandadvocacycenter.org",
      phone: "516-465-8700"
    },

  ],

  "North Carolina": [

    // Government & Public Benefits Services
    {
      name: "NC Division of Mental Health, Developmental Disabilities and Substance Use Services",
      category: "government",
      description: "Administers North Carolina's Medicaid HCBS waivers and state-funded services for individuals with developmental disabilities, including autism, through a network of Local Management Entities.",
      website: "https://www.ncdhhs.gov/divisions/mhddsus",
      phone: "919-733-7011"
    },
    {
      name: "NC Department of Public Instruction – Exceptional Children Division",
      category: "government",
      description: "Oversees IDEA compliance and special education services for North Carolina students with disabilities, providing guidance on IEPs, due process, and family rights.",
      website: "https://www.dpi.nc.gov/students-families/exceptional-children",
      phone: "984-236-2400"
    },
    {
      name: "NC Infant-Toddler Program",
      category: "government",
      description: "North Carolina's IDEA Part C early intervention program providing services for children birth to age 3 with developmental delays, including service coordination and family support plans.",
      website: "https://www.ncdhhs.gov/divisions/public-health/north-carolina-infant-toddler-program",
      phone: "919-707-5520"
    },

    // Parent & Family Support Networks
    {
      name: "Exceptional Children's Assistance Center (ECAC)",
      category: "parent-family",
      description: "North Carolina's federally funded Parent Training and Information Center offering free training, advocacy support, and one-on-one assistance to families of children with disabilities.",
      website: "https://www.ecac-parentcenter.org",
      phone: "800-962-6817"
    },
    {
      name: "Autism Society of North Carolina",
      category: "parent-family",
      description: "Provides family support, crisis assistance, adult services, and community programs for individuals with autism and their families across all 100 North Carolina counties.",
      website: "https://www.autismsociety-nc.org",
      phone: "800-442-2762"
    },

    // Advocacy, Legal & Rights Protection
    {
      name: "Disability Rights NC",
      category: "advocacy",
      description: "North Carolina's federally designated Protection & Advocacy organization providing free legal services and systemic advocacy for North Carolinians with disabilities, including autism.",
      website: "https://disabilityrightsnc.org",
      phone: "877-235-4210"
    },
    {
      name: "NC Council on Developmental Disabilities",
      category: "advocacy",
      description: "Federally funded council promoting self-determination, community inclusion, and systems change for North Carolinians with developmental disabilities through advocacy and grants.",
      website: "https://nccdd.org",
      phone: "919-850-2901"
    },

    // Respite, Wellness & Specialized Caregiver Services
    {
      name: "TEACCH Autism Program – UNC Chapel Hill",
      category: "respite",
      description: "Evidence-based autism service, training, and research program providing assessment, therapy, family education, and community support for individuals with autism across North Carolina.",
      website: "https://teacch.com",
      phone: "919-966-2174"
    },
    {
      name: "Families Together NC",
      category: "respite",
      description: "Provides family peer support, respite navigation, and caregiver training for families of individuals with developmental disabilities across North Carolina.",
      website: "https://www.familiestogethernc.org",
      phone: "919-865-8880"
    },

  ],

  "North Dakota": [

    // Government & Public Benefits Services
    {
      name: "North Dakota Department of Human Services – Developmental Disabilities Division",
      category: "government",
      description: "Administers North Dakota's Medicaid HCBS waivers and state services for individuals with developmental disabilities, including autism, coordinating residential, day, and family support.",
      website: "https://www.hhs.nd.gov/disabilities/developmental-disabilities",
      phone: "701-328-8930"
    },
    {
      name: "North Dakota Department of Public Instruction – Special Education",
      category: "government",
      description: "Oversees IDEA compliance and special education services for North Dakota students with disabilities, providing guidance on IEPs and supporting families in navigating their rights.",
      website: "https://www.nd.gov/dpi/districts-schools/student-support-services/special-education",
      phone: "701-328-2277"
    },
    {
      name: "North Dakota Early Intervention Program",
      category: "government",
      description: "North Dakota's IDEA Part C program providing early intervention services for children birth to age 3 with developmental delays, including service coordination and family supports.",
      website: "https://www.hhs.nd.gov/disabilities/early-intervention",
      phone: "701-328-8930"
    },

    // Parent & Family Support Networks
    {
      name: "Pathfinder Parent Center",
      category: "parent-family",
      description: "North Dakota's federally funded Parent Training and Information Center offering free advocacy training, workshops, and one-on-one support to families of children with disabilities.",
      website: "https://www.pathfinder-nd.org",
      phone: "800-245-5840"
    },
    {
      name: "Autism Society of North Dakota",
      category: "parent-family",
      description: "Provides community awareness, support group connections, and resource navigation for individuals with autism and their families across North Dakota.",
      website: "https://autismnd.com",
      phone: "701-277-0844"
    },

    // Advocacy, Legal & Rights Protection
    {
      name: "Disability Rights North Dakota",
      category: "advocacy",
      description: "North Dakota's federally designated Protection & Advocacy organization providing free legal services and advocacy for North Dakotans with disabilities, including those with autism.",
      website: "https://www.disabilityrightnd.org",
      phone: "800-642-6694"
    },
    {
      name: "North Dakota Developmental Disabilities Council",
      category: "advocacy",
      description: "Federally funded council promoting self-determination, community inclusion, and systems change for North Dakotans with developmental disabilities through advocacy and grants.",
      website: "https://www.nd.gov/ndcpd",
      phone: "701-328-8953"
    },

    // Respite, Wellness & Specialized Caregiver Services
    {
      name: "The Arc of North Dakota",
      category: "respite",
      description: "Provides advocacy, family support, and community resources for individuals with intellectual and developmental disabilities and their families across North Dakota.",
      website: "https://arcnd.org",
      phone: "701-221-1811"
    },
    {
      name: "HIT Program – Hope, Independence & Transition (Sanford Health)",
      category: "respite",
      description: "Offers therapeutic recreation, social skills, and family respite programs for children and adults with autism and developmental disabilities in North Dakota.",
      website: "https://www.sanfordhealth.org",
      phone: "701-234-2000"
    },

  ],

  "Ohio": [

    // Government & Public Benefits Services
    {
      name: "Ohio Department of Developmental Disabilities (DODD)",
      category: "government",
      description: "Administers Ohio's Medicaid HCBS waivers and county board system supporting individuals with developmental disabilities, including autism, with residential, day, and family support services.",
      website: "https://dodd.ohio.gov",
      phone: "800-617-6733"
    },
    {
      name: "Ohio Department of Education – Office for Exceptional Children",
      category: "government",
      description: "Oversees IDEA compliance and special education for Ohio students with disabilities, providing guidance on IEPs, due process, and family rights for students including those with autism.",
      website: "https://education.ohio.gov/Topics/Special-Education",
      phone: "614-466-2650"
    },
    {
      name: "Ohio Help Me Grow – Early Intervention",
      category: "government",
      description: "Ohio's IDEA Part C early intervention program connecting families of children birth to age 3 with developmental delays to therapies, service coordinators, and individualized family support plans.",
      website: "https://helpmegrow.ohio.gov",
      phone: "800-755-4769"
    },

    // Parent & Family Support Networks
    {
      name: "Ohio Coalition for the Education of Children with Disabilities (OCECD)",
      category: "parent-family",
      description: "Ohio's federally funded Parent Training and Information Center offering free training, advocacy support, and one-on-one help to Ohio families navigating special education and disability services.",
      website: "https://www.ocecd.org",
      phone: "800-374-2806"
    },
    {
      name: "Autism Society of Greater Cincinnati",
      category: "parent-family",
      description: "Provides support groups, resource navigation, and community events for individuals with autism and their families in the greater Cincinnati area and surrounding Ohio region.",
      website: "https://www.autismcincy.org",
      phone: "513-561-2300"
    },

    // Advocacy, Legal & Rights Protection
    {
      name: "Disability Rights Ohio",
      category: "advocacy",
      description: "Ohio's federally designated Protection & Advocacy organization providing free legal services, investigations, and systemic advocacy for Ohioans with disabilities, including autism.",
      website: "https://www.disabilityrightsohio.org",
      phone: "800-282-9181"
    },
    {
      name: "Ohio Developmental Disabilities Council",
      category: "advocacy",
      description: "Federally funded council promoting self-determination, community inclusion, and systems change for Ohioans with developmental disabilities through advocacy, grants, and policy work.",
      website: "https://ddc.ohio.gov",
      phone: "800-766-7426"
    },

    // Respite, Wellness & Specialized Caregiver Services
    {
      name: "The Arc of Ohio",
      category: "respite",
      description: "Statewide organization providing advocacy, family support, and respite resources for individuals with intellectual and developmental disabilities and their families across Ohio.",
      website: "https://www.thearcofohio.org",
      phone: "800-875-2723"
    },
    {
      name: "Ohio Respite Coalition",
      category: "respite",
      description: "Promotes and expands respite care services for families of individuals with disabilities across Ohio, providing referrals and caregiver support resources.",
      website: "https://www.ohiorespitecoalition.org",
      phone: "614-310-6270"
    },

  ],

  "Oklahoma": [

    // Government & Public Benefits Services
    {
      name: "Oklahoma Department of Human Services – Developmental Disabilities Services (DDS)",
      category: "government",
      description: "Administers Oklahoma's Medicaid HCBS waivers and state-funded services for individuals with intellectual and developmental disabilities, including autism, supporting community living and family care.",
      website: "https://oklahoma.gov/okdhs/services/dd.html",
      phone: "405-521-6267"
    },
    {
      name: "Oklahoma State Department of Education – Special Education Services",
      category: "government",
      description: "Oversees IDEA compliance and special education for Oklahoma students with disabilities, providing guidance on IEPs, dispute resolution, and family rights.",
      website: "https://sde.ok.gov/special-education",
      phone: "405-521-3351"
    },
    {
      name: "Oklahoma SoonerStart Early Intervention Program",
      category: "government",
      description: "Oklahoma's IDEA Part C program providing early intervention services for children birth to age 3 with developmental delays, including service coordination and family support plans.",
      website: "https://oklahoma.gov/health/family-health/sooner-start.html",
      phone: "405-271-8333"
    },

    // Parent & Family Support Networks
    {
      name: "Oklahoma Parents Center (OPC)",
      category: "parent-family",
      description: "Oklahoma's federally funded Parent Training and Information Center offering free training, advocacy support, and one-on-one assistance to families of children with disabilities.",
      website: "https://www.oklahomaparentscenter.org",
      phone: "877-553-4332"
    },
    {
      name: "Autism Society of Oklahoma",
      category: "parent-family",
      description: "Provides community events, support groups, and resource navigation for individuals with autism and their families across Oklahoma.",
      website: "https://www.autismsocietyofoklahoma.org",
      phone: "405-844-4028"
    },

    // Advocacy, Legal & Rights Protection
    {
      name: "Disability Rights Oklahoma",
      category: "advocacy",
      description: "Oklahoma's federally designated Protection & Advocacy organization providing free legal services and advocacy for Oklahomans with disabilities, including those on the autism spectrum.",
      website: "https://www.disabilityrightsok.org",
      phone: "800-880-7755"
    },
    {
      name: "Oklahoma Developmental Disabilities Council",
      category: "advocacy",
      description: "Federally funded council promoting self-determination, community inclusion, and systems change for Oklahomans with developmental disabilities through advocacy and grants.",
      website: "https://www.okddc.ok.gov",
      phone: "405-521-4984"
    },

    // Respite, Wellness & Specialized Caregiver Services
    {
      name: "The Arc of Oklahoma",
      category: "respite",
      description: "Provides advocacy, family support, and respite resources for individuals with intellectual and developmental disabilities and their families across Oklahoma.",
      website: "https://www.arcok.org",
      phone: "405-525-7631"
    },
    {
      name: "Enable Oklahoma",
      category: "respite",
      description: "Provides home modification, assistive technology, and respite resources to support individuals with disabilities and their caregivers in living independently across Oklahoma.",
      website: "https://www.enableok.com",
      phone: "405-751-3885"
    },

  ],

  "Oregon": [

    // Government & Public Benefits Services
    {
      name: "Oregon Department of Human Services – Intellectual and Developmental Disabilities (IDD)",
      category: "government",
      description: "Administers Oregon's Medicaid K Plan and state IDD services for individuals with developmental disabilities, including autism, through a network of county community developmental disability programs.",
      website: "https://www.oregon.gov/odhs/providers-partners/intellectual-developmental-disabilities",
      phone: "503-945-5944"
    },
    {
      name: "Oregon Department of Education – Special Education",
      category: "government",
      description: "Oversees IDEA compliance and special education services for Oregon students with disabilities, providing guidance on IEPs, dispute resolution, and family rights.",
      website: "https://www.oregon.gov/ode/students-and-family/specialeducation",
      phone: "503-947-5600"
    },
    {
      name: "Oregon Early Intervention / Early Childhood Special Education (EI/ECSE)",
      category: "government",
      description: "Oregon's IDEA Part B and C programs providing early intervention and special education for children birth to age 5 with developmental delays or disabilities, including service coordination.",
      website: "https://www.oregon.gov/ode/students-and-family/specialeducation/earlyintervention",
      phone: "503-947-5600"
    },

    // Parent & Family Support Networks
    {
      name: "Family and Community Together (FACT Oregon)",
      category: "parent-family",
      description: "Oregon's federally funded Parent Training and Information Center offering free training, advocacy support, and one-on-one assistance to families of children with disabilities.",
      website: "https://factoregon.org",
      phone: "888-988-3228"
    },
    {
      name: "Autism Society of Oregon",
      category: "parent-family",
      description: "Provides support groups, community events, and resource navigation for individuals with autism and their families throughout Oregon.",
      website: "https://www.autismsocietyoforegon.org",
      phone: "503-636-1676"
    },

    // Advocacy, Legal & Rights Protection
    {
      name: "Disability Rights Oregon",
      category: "advocacy",
      description: "Oregon's federally designated Protection & Advocacy organization providing free legal services and advocacy for Oregonians with disabilities, including those on the autism spectrum.",
      website: "https://droregon.org",
      phone: "503-243-2081"
    },
    {
      name: "Oregon Council on Developmental Disabilities",
      category: "advocacy",
      description: "Federally funded council promoting self-determination, community inclusion, and systems change for Oregonians with developmental disabilities through advocacy and grants.",
      website: "https://ocdd.org",
      phone: "503-945-9941"
    },

    // Respite, Wellness & Specialized Caregiver Services
    {
      name: "Relief Nursery",
      category: "respite",
      description: "Provides therapeutic respite, family support, and early intervention services for families of young children with developmental needs in Lane County and surrounding Oregon communities.",
      website: "https://reliefnursery.org",
      phone: "541-343-3958"
    },
    {
      name: "Albertina Kerr – Autism and Developmental Disabilities",
      category: "respite",
      description: "Offers respite care, residential support, and community services for individuals with autism and developmental disabilities and their families across Oregon.",
      website: "https://www.albertinakerr.org",
      phone: "503-239-8101"
    },

  ],

  "Pennsylvania": [

    // Government & Public Benefits Services
    {
      name: "Pennsylvania Office of Developmental Programs (ODP)",
      category: "government",
      description: "Administers Pennsylvania's Medicaid HCBS waivers and state-funded services for individuals with intellectual disabilities and autism, supporting residential, day, employment, and family programs.",
      website: "https://www.dhs.pa.gov/Services/Disabilities-Special-Needs/Pages/ODP.aspx",
      phone: "888-565-9435"
    },
    {
      name: "Pennsylvania Department of Education – Bureau of Special Education",
      category: "government",
      description: "Oversees IDEA compliance and special education for Pennsylvania students with disabilities, providing guidance on IEPs, due process rights, and dispute resolution.",
      website: "https://www.education.pa.gov/K-12/Special%20Education/Pages/default.aspx",
      phone: "717-783-6913"
    },
    {
      name: "Pennsylvania Early Intervention Program",
      category: "government",
      description: "Pennsylvania's IDEA Part C program connecting families of children birth to age 3 with developmental delays to service coordinators, therapies, and individualized family support plans.",
      website: "https://www.dhs.pa.gov/Services/Children/Early-Intervention/Pages/default.aspx",
      phone: "800-692-7288"
    },

    // Parent & Family Support Networks
    {
      name: "PEAL Center – Parent Education and Advocacy Leadership Center",
      category: "parent-family",
      description: "Pennsylvania's federally funded Parent Training and Information Center providing free training, advocacy, and one-on-one support to families of children with disabilities navigating schools and services.",
      website: "https://www.pealcenter.org",
      phone: "866-950-1040"
    },
    {
      name: "Autism Society of Greater Pittsburgh",
      category: "parent-family",
      description: "Provides community programs, support groups, and resource navigation for individuals with autism and their families in the greater Pittsburgh area and western Pennsylvania.",
      website: "https://www.autismsocietypittsburgh.org",
      phone: "888-278-8476"
    },

    // Advocacy, Legal & Rights Protection
    {
      name: "Disability Rights Pennsylvania",
      category: "advocacy",
      description: "Pennsylvania's federally designated Protection & Advocacy organization providing free legal services, investigations, and systemic advocacy for Pennsylvanians with disabilities, including autism.",
      website: "https://www.disabilityrightspa.org",
      phone: "800-692-7443"
    },
    {
      name: "Pennsylvania Developmental Disabilities Council",
      category: "advocacy",
      description: "Federally funded council promoting self-determination, community inclusion, and systems change for Pennsylvanians with developmental disabilities through advocacy and grants.",
      website: "https://www.paddc.org",
      phone: "717-787-6057"
    },

    // Respite, Wellness & Specialized Caregiver Services
    {
      name: "The Arc of Pennsylvania",
      category: "respite",
      description: "Statewide organization providing advocacy, family support, and respite resources for individuals with intellectual and developmental disabilities and their families across Pennsylvania.",
      website: "https://thearcpa.org",
      phone: "717-790-2094"
    },
    {
      name: "Pressley Ridge – Autism Services",
      category: "respite",
      description: "Provides therapeutic respite, behavioral support, and community services for children and families affected by autism in Pennsylvania and surrounding states.",
      website: "https://www.pressleyridge.org",
      phone: "800-344-7858"
    },

  ],

  "Rhode Island": [

    // Government & Public Benefits Services
    {
      name: "Rhode Island Division of Developmental Disabilities (DDD)",
      category: "government",
      description: "Administers Rhode Island's Medicaid HCBS waivers and state services for individuals with developmental disabilities, including autism, funding residential, day, employment, and family support.",
      website: "https://bhddh.ri.gov/developmental-disabilities",
      phone: "401-462-3191"
    },
    {
      name: "Rhode Island Department of Education – Special Education",
      category: "government",
      description: "Oversees IDEA compliance and special education for Rhode Island students with disabilities, providing guidance on IEPs, dispute resolution, and family rights.",
      website: "https://ride.ri.gov/students-families/special-education",
      phone: "401-222-4600"
    },
    {
      name: "Rhode Island Early Intervention Program",
      category: "government",
      description: "Rhode Island's IDEA Part C program connecting families of children birth to age 3 with developmental delays to service coordinators, therapies, and individualized family support plans.",
      website: "https://health.ri.gov/programs/earlyintervention",
      phone: "401-222-4607"
    },

    // Parent & Family Support Networks
    {
      name: "Rhode Island Parent Information Network (RIPIN)",
      category: "parent-family",
      description: "Rhode Island's federally funded Parent Training and Information Center offering free peer support, training, and advocacy for families of children with disabilities navigating education and services.",
      website: "https://www.ripin.org",
      phone: "401-270-0101"
    },
    {
      name: "Autism Society of Rhode Island",
      category: "parent-family",
      description: "Provides community support, resource navigation, and awareness programs for individuals with autism and their families throughout Rhode Island.",
      website: "https://autismri.org",
      phone: "401-785-2666"
    },

    // Advocacy, Legal & Rights Protection
    {
      name: "Disability Rights Rhode Island",
      category: "advocacy",
      description: "Rhode Island's federally designated Protection & Advocacy organization providing free legal services and advocacy for Rhode Islanders with disabilities, including those with autism.",
      website: "https://drri.org",
      phone: "401-831-3150"
    },
    {
      name: "Rhode Island Developmental Disabilities Council",
      category: "advocacy",
      description: "Federally funded council promoting self-determination, community inclusion, and systems change for Rhode Islanders with developmental disabilities through advocacy and grants.",
      website: "https://riddc.org",
      phone: "401-737-1238"
    },

    // Respite, Wellness & Specialized Caregiver Services
    {
      name: "The Arc of Blackstone Valley",
      category: "respite",
      description: "Provides residential, day, and respite services for individuals with intellectual and developmental disabilities and their families in the Blackstone Valley region of Rhode Island.",
      website: "https://www.arcbv.org",
      phone: "401-765-3400"
    },
    {
      name: "Meeting Street",
      category: "respite",
      description: "Offers early intervention, educational, therapeutic, and family support services for children and adults with disabilities, including autism, throughout Rhode Island.",
      website: "https://www.meetingstreet.org",
      phone: "401-438-9500"
    },

  ],

  "South Carolina": [

    // Government & Public Benefits Services
    {
      name: "South Carolina Department of Disabilities and Special Needs (DDSN)",
      category: "government",
      description: "Administers South Carolina's Medicaid HCBS waivers and state services for individuals with intellectual disabilities and autism, funding residential, day, and family support programs.",
      website: "https://www.ddsn.sc.gov",
      phone: "803-898-9600"
    },
    {
      name: "South Carolina Department of Education – Office of Special Education",
      category: "government",
      description: "Oversees IDEA compliance and special education for South Carolina students with disabilities, providing guidance on IEPs, due process, and family rights.",
      website: "https://ed.sc.gov/districts-schools/special-education-services",
      phone: "803-734-8224"
    },
    {
      name: "BabyNet – South Carolina Early Intervention",
      category: "government",
      description: "South Carolina's IDEA Part C program connecting families of children birth to age 3 with developmental delays to service coordinators, therapies, and individualized family service plans.",
      website: "https://www.dhec.sc.gov/health/women-infants-children/babynet",
      phone: "803-898-0784"
    },

    // Parent & Family Support Networks
    {
      name: "PRO-Parents of South Carolina",
      category: "parent-family",
      description: "South Carolina's federally funded Parent Training and Information Center providing free advocacy training, information, and one-on-one support to families of children with disabilities.",
      website: "https://www.proparents.org",
      phone: "800-759-4776"
    },
    {
      name: "Autism Society of South Carolina",
      category: "parent-family",
      description: "Provides community support, awareness events, and resource navigation for individuals with autism and their families throughout South Carolina.",
      website: "https://www.autismsc.org",
      phone: "803-750-6988"
    },

    // Advocacy, Legal & Rights Protection
    {
      name: "Disability Rights South Carolina",
      category: "advocacy",
      description: "South Carolina's federally designated Protection & Advocacy organization providing free legal services and advocacy for South Carolinians with disabilities, including those with autism.",
      website: "https://www.disabilityrightssc.org",
      phone: "803-782-0639"
    },
    {
      name: "South Carolina Developmental Disabilities Council",
      category: "advocacy",
      description: "Federally funded council promoting self-determination, community inclusion, and systems change for South Carolinians with developmental disabilities through advocacy and grants.",
      website: "https://www.scddc.sc.gov",
      phone: "803-734-0465"
    },

    // Respite, Wellness & Specialized Caregiver Services
    {
      name: "Able South Carolina",
      category: "respite",
      description: "Provides independent living services, peer support, assistive technology, and respite resources for individuals with disabilities across South Carolina.",
      website: "https://www.ablesouthcarolina.org",
      phone: "803-779-5121"
    },
    {
      name: "Moss Foundation – SC Autism and Disability Resources",
      category: "respite",
      description: "Offers therapeutic recreation, respite, and community support services for individuals with autism and developmental disabilities and their families across South Carolina.",
      website: "https://www.mossfoundationsc.org",
      phone: "803-252-9777"
    },

  ],

  "South Dakota": [

    // Government & Public Benefits Services
    {
      name: "South Dakota Division of Developmental Disabilities (DHS)",
      category: "government",
      description: "Administers South Dakota's Medicaid HCBS waivers and state services for individuals with developmental disabilities, including autism, supporting residential, day, and family support programs.",
      website: "https://dss.sd.gov/developmentaldisabilities",
      phone: "605-773-3438"
    },
    {
      name: "South Dakota Department of Education – Office of Special Education",
      category: "government",
      description: "Oversees IDEA compliance and special education for South Dakota students with disabilities, providing guidance on IEPs, dispute resolution, and family rights.",
      website: "https://doe.sd.gov/oess/specialed.aspx",
      phone: "605-773-3678"
    },
    {
      name: "South Dakota Birth to 3 Connections – Early Intervention",
      category: "government",
      description: "South Dakota's IDEA Part C program providing early intervention services for children birth to age 3 with developmental delays, including service coordination and family support plans.",
      website: "https://dss.sd.gov/developmentaldisabilities/birthto3.aspx",
      phone: "605-773-3438"
    },

    // Parent & Family Support Networks
    {
      name: "South Dakota Parent Connection (SDPC)",
      category: "parent-family",
      description: "South Dakota's federally funded Parent Training and Information Center offering free training, advocacy support, and one-on-one assistance to families of children with disabilities.",
      website: "https://www.sdparent.org",
      phone: "800-640-4553"
    },
    {
      name: "Autism Society of the Black Hills",
      category: "parent-family",
      description: "Provides community support, awareness events, and resource navigation for individuals with autism and their families in the Black Hills region and across South Dakota.",
      website: "https://www.autismsocietyblackhills.org",
      phone: "605-716-1866"
    },

    // Advocacy, Legal & Rights Protection
    {
      name: "Disability Rights South Dakota",
      category: "advocacy",
      description: "South Dakota's federally designated Protection & Advocacy organization providing free legal services and advocacy for South Dakotans with disabilities, including those with autism.",
      website: "https://www.drsdlaw.org",
      phone: "800-658-4782"
    },
    {
      name: "South Dakota Council on Developmental Disabilities",
      category: "advocacy",
      description: "Federally funded council promoting self-determination, community inclusion, and systems change for South Dakotans with developmental disabilities through advocacy and grants.",
      website: "https://www.sdcdd.org",
      phone: "605-367-5463"
    },

    // Respite, Wellness & Specialized Caregiver Services
    {
      name: "The Arc of South Dakota",
      category: "respite",
      description: "Provides advocacy, family support, and community resources for individuals with intellectual and developmental disabilities and their families across South Dakota.",
      website: "https://thearcofsouthdakota.org",
      phone: "605-332-5654"
    },
    {
      name: "LifeQuest of the Midlands",
      category: "respite",
      description: "Offers day habilitation, respite care, and community support services for individuals with developmental disabilities and autism in eastern South Dakota.",
      website: "https://lifequestofthemidlands.org",
      phone: "605-336-1765"
    },

  ],

  "Tennessee": [

    // Government & Public Benefits Services
    {
      name: "Tennessee Division of Intellectual Disabilities (DIDD)",
      category: "government",
      description: "Administers Tennessee's Medicaid HCBS waivers and state-funded services for individuals with intellectual disabilities and autism, supporting residential, employment, and family programs.",
      website: "https://www.tn.gov/didd.html",
      phone: "615-532-6530"
    },
    {
      name: "Tennessee Department of Education – Special Education",
      category: "government",
      description: "Oversees IDEA compliance and special education for Tennessee students with disabilities, providing guidance on IEPs, due process rights, and compliance monitoring.",
      website: "https://www.tn.gov/education/districts/special-populations/special-education.html",
      phone: "615-741-2851"
    },
    {
      name: "Tennessee Early Intervention System (TEIS)",
      category: "government",
      description: "Tennessee's IDEA Part C program connecting families of children birth to age 3 with developmental delays to service coordinators, therapies, and individualized family support plans.",
      website: "https://www.tn.gov/didd/for-families/tennessee-early-intervention-system.html",
      phone: "800-852-7157"
    },

    // Parent & Family Support Networks
    {
      name: "Support and Training for Exceptional Parents (STEP)",
      category: "parent-family",
      description: "Tennessee's federally funded Parent Training and Information Center offering free workshops, one-on-one advocacy coaching, and resources for families of children with disabilities.",
      website: "https://www.tnstep.org",
      phone: "800-280-7837"
    },
    {
      name: "Autism Tennessee",
      category: "parent-family",
      description: "Provides community programs, support groups, and resource navigation for individuals with autism and their families across Tennessee.",
      website: "https://www.autismtn.org",
      phone: "615-385-2077"
    },

    // Advocacy, Legal & Rights Protection
    {
      name: "Disability Rights Tennessee",
      category: "advocacy",
      description: "Tennessee's federally designated Protection & Advocacy organization providing free legal services and advocacy for Tennesseans with disabilities, including those on the autism spectrum.",
      website: "https://www.disabilityrightstn.org",
      phone: "800-342-1660"
    },
    {
      name: "Tennessee Council on Developmental Disabilities",
      category: "advocacy",
      description: "Federally funded council promoting self-determination, community inclusion, and systems change for Tennesseans with developmental disabilities through advocacy and grants.",
      website: "https://www.tn.gov/cdd.html",
      phone: "615-532-6615"
    },

    // Respite, Wellness & Specialized Caregiver Services
    {
      name: "Vanderbilt Kennedy Center – TRIAD Autism Services",
      category: "respite",
      description: "Treatment and Research Institute for Autism Spectrum Disorders (TRIAD) offering assessment, family consultation, training, and community support for individuals with autism across Tennessee.",
      website: "https://vkc.vumc.org/vkc/triad",
      phone: "615-936-0267"
    },
    {
      name: "Respite Care Association of Tennessee",
      category: "respite",
      description: "Promotes and connects families of individuals with disabilities to respite care services and caregiver support resources across Tennessee.",
      website: "https://www.respitetn.org",
      phone: "615-383-0161"
    },

  ],

  "Texas": [

    // Government & Public Benefits Services
    {
      name: "Texas Health and Human Services – Intellectual and Developmental Disability Services (IDDS)",
      category: "government",
      description: "Administers Texas's Medicaid HCBS waivers and state-funded IDD services for individuals with developmental disabilities, including autism, through a network of local authorities.",
      website: "https://www.hhs.texas.gov/services/disability/intellectual-developmental-disability-idd-services",
      phone: "877-541-7905"
    },
    {
      name: "Texas Education Agency – Special Education",
      category: "government",
      description: "Oversees IDEA compliance and special education for Texas students with disabilities, providing guidance on IEPs, dispute resolution, and family rights across Texas school districts.",
      website: "https://tea.texas.gov/academics/special-student-populations/special-education",
      phone: "512-463-9414"
    },
    {
      name: "Texas Early Childhood Intervention (ECI) Program",
      category: "government",
      description: "Texas's IDEA Part C program connecting families of children birth to age 3 with developmental delays to service coordinators, therapies, and individualized family service plans.",
      website: "https://www.hhs.texas.gov/services/disability/early-childhood-intervention-services",
      phone: "877-787-8999"
    },

    // Parent & Family Support Networks
    {
      name: "Partners Resource Network (PRN) – Texas",
      category: "parent-family",
      description: "Texas's federally funded Parent Training and Information network with regional centers offering free training, advocacy coaching, and support to families of children with disabilities.",
      website: "https://prntexas.org",
      phone: "409-898-4684"
    },
    {
      name: "Autism Society of Texas",
      category: "parent-family",
      description: "Provides community support, resource navigation, and advocacy for individuals with autism and their families across the Lone Star State.",
      website: "https://www.autismsocietytx.org",
      phone: "512-479-4199"
    },

    // Advocacy, Legal & Rights Protection
    {
      name: "Disability Rights Texas",
      category: "advocacy",
      description: "Texas's federally designated Protection & Advocacy organization providing free legal services, investigations, and systemic advocacy for Texans with disabilities, including autism.",
      website: "https://www.disabilityrightstx.org",
      phone: "800-252-9108"
    },
    {
      name: "Texas Council for Developmental Disabilities",
      category: "advocacy",
      description: "Federally funded council promoting self-determination, community inclusion, and systems change for Texans with developmental disabilities through advocacy, grants, and policy work.",
      website: "https://www.tcdd.texas.gov",
      phone: "512-437-5432"
    },

    // Respite, Wellness & Specialized Caregiver Services
    {
      name: "Texas Respite Resource Network",
      category: "respite",
      description: "Connects families of individuals with disabilities across Texas to respite care providers, caregiver training, and support resources to prevent caregiver burnout.",
      website: "https://www.respiteresources.org",
      phone: "210-615-7788"
    },
    {
      name: "Autism Treatment Center",
      category: "respite",
      description: "Provides behavioral therapy, social skills programming, and family support services for individuals with autism and their caregivers in the Dallas-Fort Worth metroplex and across Texas.",
      website: "https://www.atcoftexas.org",
      phone: "972-644-2076"
    },

  ],

  "Utah": [

    // Government & Public Benefits Services
    {
      name: "Utah Division of Services for People with Disabilities (DSPD)",
      category: "government",
      description: "Administers Utah's Medicaid HCBS waivers and state-funded services for individuals with developmental disabilities, including autism, supporting residential, day, employment, and family programs.",
      website: "https://dspd.utah.gov",
      phone: "801-538-4200"
    },
    {
      name: "Utah State Board of Education – Special Education",
      category: "government",
      description: "Oversees IDEA compliance and special education for Utah students with disabilities, providing guidance on IEPs, dispute resolution, and family rights.",
      website: "https://www.schools.utah.gov/specialeducation",
      phone: "801-538-7706"
    },
    {
      name: "Baby Watch Early Intervention Program – Utah",
      category: "government",
      description: "Utah's IDEA Part C program connecting families of children birth to age 3 with developmental delays to service coordinators, therapies, and individualized family service plans.",
      website: "https://www.health.utah.gov/babywatch",
      phone: "801-584-8226"
    },

    // Parent & Family Support Networks
    {
      name: "Utah Parent Center",
      category: "parent-family",
      description: "Utah's federally funded Parent Training and Information Center offering free training, advocacy coaching, and support to families of children with disabilities navigating schools and services.",
      website: "https://www.utahparentcenter.org",
      phone: "800-468-1160"
    },
    {
      name: "Autism Council of Utah",
      category: "parent-family",
      description: "Provides community education, resource navigation, and family support for individuals with autism and their families throughout Utah.",
      website: "https://www.autismcouncilofutah.org",
      phone: "801-560-1563"
    },

    // Advocacy, Legal & Rights Protection
    {
      name: "Disability Law Center – Utah",
      category: "advocacy",
      description: "Utah's federally designated Protection & Advocacy organization providing free legal services and advocacy for Utahns with disabilities, including those on the autism spectrum.",
      website: "https://www.disabilitylawcenter.org",
      phone: "801-363-1347"
    },
    {
      name: "Utah Governor's Council for People with Disabilities",
      category: "advocacy",
      description: "Federally funded council promoting self-determination, community inclusion, and systems change for Utahns with developmental disabilities through advocacy and grants.",
      website: "https://gcpd.utah.gov",
      phone: "801-533-3965"
    },

    // Respite, Wellness & Specialized Caregiver Services
    {
      name: "Utah Respite Coalition",
      category: "respite",
      description: "Connects Utah families of individuals with disabilities to respite care resources, caregiver training, and support networks to sustain family caregiving.",
      website: "https://jobs.utah.gov/usor/vr/community/respite.html",
      phone: "801-538-7530"
    },
    {
      name: "Utah Autism Foundation",
      category: "respite",
      description: "Provides family support, respite resources, and community programs for individuals with autism and their caregivers across Utah.",
      website: "https://utahautismfoundation.org",
      phone: "801-266-2111"
    },

  ],

  "Vermont": [

    // Government & Public Benefits Services
    {
      name: "Vermont Division of Disability and Aging Services – Developmental Services (DS)",
      category: "government",
      description: "Administers Vermont's Medicaid HCBS waivers and state services for adults with developmental disabilities, including autism, through regional designated agencies across Vermont.",
      website: "https://dail.vermont.gov/services/developmental-services",
      phone: "802-871-3065"
    },
    {
      name: "Vermont Agency of Education – Special Education",
      category: "government",
      description: "Oversees IDEA compliance and special education for Vermont students with disabilities, providing guidance on IEPs, due process rights, and compliance monitoring.",
      website: "https://education.vermont.gov/student-support/vermont-special-education",
      phone: "802-828-1256"
    },
    {
      name: "Vermont Family Infant Toddler (FIT) Program",
      category: "government",
      description: "Vermont's IDEA Part C early intervention program providing services for children birth to age 3 with developmental delays, including service coordination and individualized family support plans.",
      website: "https://dail.vermont.gov/fit",
      phone: "802-871-3272"
    },

    // Parent & Family Support Networks
    {
      name: "Vermont Family Network",
      category: "parent-family",
      description: "Vermont's federally funded Parent Training and Information Center offering free training, advocacy coaching, and peer support for families of children with disabilities navigating education and services.",
      website: "https://www.vermontfamilynetwork.org",
      phone: "800-800-4005"
    },
    {
      name: "Autism Society of Vermont",
      category: "parent-family",
      description: "Provides community support, awareness events, and resource navigation for individuals with autism and their families throughout Vermont.",
      website: "https://www.autismvermont.org",
      phone: "802-985-9288"
    },

    // Advocacy, Legal & Rights Protection
    {
      name: "Disability Rights Vermont",
      category: "advocacy",
      description: "Vermont's federally designated Protection & Advocacy organization providing free legal services and advocacy for Vermonters with disabilities, including those on the autism spectrum.",
      website: "https://www.disabilityrightsvt.org",
      phone: "800-834-7890"
    },
    {
      name: "Vermont Developmental Disabilities Council",
      category: "advocacy",
      description: "Federally funded council promoting self-determination, community inclusion, and systems change for Vermonters with developmental disabilities through advocacy and grants.",
      website: "https://ddcouncil.vermont.gov",
      phone: "802-828-1310"
    },

    // Respite, Wellness & Specialized Caregiver Services
    {
      name: "Howard Center – Developmental and Autism Services",
      category: "respite",
      description: "Provides community-based respite, residential support, and family services for individuals with developmental disabilities and autism in Chittenden County and across Vermont.",
      website: "https://www.howardcenter.org",
      phone: "802-488-6000"
    },
    {
      name: "Vermont Caregiver Alliance",
      category: "respite",
      description: "Supports family caregivers across Vermont through education, peer connections, and respite resource navigation to sustain long-term caregiving.",
      website: "https://www.vermontcaregiversalliance.org",
      phone: "802-662-5283"
    },

  ],

  "Virginia": [

    // Government & Public Benefits Services
    {
      name: "Virginia Department of Behavioral Health and Developmental Services (DBHDS)",
      category: "government",
      description: "Administers Virginia's Medicaid HCBS waivers for individuals with developmental disabilities, including autism, through community services boards statewide.",
      website: "https://dbhds.virginia.gov",
      phone: "804-786-3921"
    },
    {
      name: "Virginia Department of Education – Division of Special Education",
      category: "government",
      description: "Oversees IDEA compliance and special education for Virginia students with disabilities, providing guidance on IEPs, dispute resolution, and family rights.",
      website: "https://www.doe.virginia.gov/programs-services/special-education",
      phone: "804-225-2402"
    },
    {
      name: "Virginia's Early Intervention System (Part C)",
      category: "government",
      description: "Virginia's IDEA Part C program connecting families of children birth to age 3 with developmental delays to service coordinators, therapies, and individualized family service plans.",
      website: "https://www.infantva.org",
      phone: "804-371-6592"
    },

    // Parent & Family Support Networks
    {
      name: "Parent Educational Advocacy Training Center (PEATC)",
      category: "parent-family",
      description: "Virginia's federally funded Parent Training and Information Center offering free workshops, advocacy coaching, and individualized support to families of children with disabilities.",
      website: "https://www.peatc.org",
      phone: "800-869-6782"
    },
    {
      name: "Commonwealth Autism",
      category: "parent-family",
      description: "Provides training, consultation, and resource navigation for individuals with autism, their families, and professionals across Virginia.",
      website: "https://www.commonwealthautism.org",
      phone: "804-355-0300"
    },

    // Advocacy, Legal & Rights Protection
    {
      name: "disAbility Law Center of Virginia (dLCV)",
      category: "advocacy",
      description: "Virginia's federally designated Protection & Advocacy organization providing free legal services and advocacy for Virginians with disabilities, including those on the autism spectrum.",
      website: "https://www.dlcv.org",
      phone: "800-552-3962"
    },
    {
      name: "Virginia Board for People with Disabilities (VBPD)",
      category: "advocacy",
      description: "Federally funded council promoting self-determination, community inclusion, and systems change for Virginians with developmental disabilities through advocacy and grants.",
      website: "https://www.vbpd.virginia.gov",
      phone: "800-846-4464"
    },

    // Respite, Wellness & Specialized Caregiver Services
    {
      name: "The Arc of Virginia",
      category: "respite",
      description: "Provides advocacy, family resources, and community support for individuals with intellectual and developmental disabilities and their families across Virginia.",
      website: "https://thearcofva.org",
      phone: "804-649-8481"
    },
    {
      name: "Virginia Autism Project",
      category: "respite",
      description: "Offers training, consultation, and family support services for individuals with autism and their caregivers, with a focus on evidence-based practices across Virginia.",
      website: "https://www.virginiaautismproject.com",
      phone: "804-828-8196"
    },

  ],

  "Washington": [

    // Government & Public Benefits Services
    {
      name: "Washington State Developmental Disabilities Administration (DDA – DSHS)",
      category: "government",
      description: "Administers Washington's Medicaid HCBS waivers and state-funded services for individuals with developmental disabilities, including autism, supporting residential, employment, and family programs.",
      website: "https://www.dshs.wa.gov/dda",
      phone: "360-725-3410"
    },
    {
      name: "Office of Superintendent of Public Instruction (OSPI) – Special Education",
      category: "government",
      description: "Oversees IDEA compliance and special education for Washington students with disabilities, providing guidance on IEPs, dispute resolution, and family rights statewide.",
      website: "https://www.k12.wa.us/student-success/special-education",
      phone: "360-725-6075"
    },
    {
      name: "Washington State Birth to 3 Program",
      category: "government",
      description: "Washington's IDEA Part C early intervention program connecting families of children birth to age 3 with developmental delays to service coordinators and individualized family support plans.",
      website: "https://www.dcyf.wa.gov/services/early-learning/birth-to-3",
      phone: "360-725-3200"
    },

    // Parent & Family Support Networks
    {
      name: "Washington PAVE – Partnerships for Action, Voices for Empowerment",
      category: "parent-family",
      description: "Washington's federally funded Parent Training and Information Center offering free training, advocacy support, and peer connections for families of children with disabilities.",
      website: "https://wapave.org",
      phone: "800-572-7368"
    },
    {
      name: "Autism Society of Washington",
      category: "parent-family",
      description: "Provides community programs, support groups, and resource navigation for individuals with autism and their families throughout Washington State.",
      website: "https://www.autismsocietyofwa.org",
      phone: "206-763-2704"
    },

    // Advocacy, Legal & Rights Protection
    {
      name: "Disability Rights Washington (DRW)",
      category: "advocacy",
      description: "Washington's federally designated Protection & Advocacy organization providing free legal services and advocacy for Washingtonians with disabilities, including those with autism.",
      website: "https://www.disabilityrightswa.org",
      phone: "800-562-2702"
    },
    {
      name: "Developmental Disabilities Council of Washington (DDC)",
      category: "advocacy",
      description: "Federally funded council promoting self-determination, community inclusion, and systems change for Washingtonians with developmental disabilities through advocacy and grants.",
      website: "https://www.ddc.wa.gov",
      phone: "360-586-3560"
    },

    // Respite, Wellness & Specialized Caregiver Services
    {
      name: "The Arc of Washington State",
      category: "respite",
      description: "Statewide advocacy organization providing family resources, respite navigation, and community support for individuals with intellectual and developmental disabilities across Washington.",
      website: "https://www.arcwa.org",
      phone: "253-896-6755"
    },
    {
      name: "Outdoors for All Foundation",
      category: "respite",
      description: "Provides adaptive sports, recreation therapy, and respite through inclusive outdoor programs for children and adults with disabilities, including autism, in the greater Seattle area.",
      website: "https://www.outdoorsforall.org",
      phone: "206-838-6030"
    },

  ],

  "West Virginia": [

    // Government & Public Benefits Services
    {
      name: "West Virginia Department of Health – Office of Developmental Services",
      category: "government",
      description: "Administers West Virginia's Medicaid HCBS waivers for individuals with intellectual and developmental disabilities, including autism, coordinating residential, day, and family support services.",
      website: "https://dhhr.wv.gov/bhhf/developmental",
      phone: "304-356-4811"
    },
    {
      name: "West Virginia Department of Education – Office of Special Education",
      category: "government",
      description: "Oversees IDEA compliance and special education for West Virginia students with disabilities, providing guidance on IEPs, dispute resolution, and family rights.",
      website: "https://wvde.us/special-education",
      phone: "304-558-2696"
    },
    {
      name: "West Virginia Birth to Three – Early Intervention",
      category: "government",
      description: "West Virginia's IDEA Part C program connecting families of children birth to age 3 with developmental delays to service coordinators, therapies, and family support plans.",
      website: "https://dhhr.wv.gov/birth23",
      phone: "304-356-3191"
    },

    // Parent & Family Support Networks
    {
      name: "West Virginia Parent Training and Information Center (WVPTI)",
      category: "parent-family",
      description: "West Virginia's federally funded Parent Training and Information Center providing free advocacy training, workshops, and one-on-one support to families of children with disabilities.",
      website: "https://www.wvpti.org",
      phone: "304-624-1436"
    },
    {
      name: "Autism Society of West Virginia",
      category: "parent-family",
      description: "Provides community support, resource navigation, and awareness programs for individuals with autism and their families throughout West Virginia.",
      website: "https://www.autismwv.org",
      phone: "304-768-3350"
    },

    // Advocacy, Legal & Rights Protection
    {
      name: "Disability Rights West Virginia",
      category: "advocacy",
      description: "West Virginia's federally designated Protection & Advocacy organization providing free legal services and advocacy for West Virginians with disabilities, including those with autism.",
      website: "https://www.drnc.org",
      phone: "800-950-5250"
    },
    {
      name: "West Virginia Developmental Disabilities Council",
      category: "advocacy",
      description: "Federally funded council promoting self-determination, community inclusion, and systems change for West Virginians with developmental disabilities through advocacy and grants.",
      website: "https://www.wvddc.org",
      phone: "304-558-0416"
    },

    // Respite, Wellness & Specialized Caregiver Services
    {
      name: "The Arc of West Virginia",
      category: "respite",
      description: "Provides advocacy, family support, and community resources for individuals with intellectual and developmental disabilities and their families across West Virginia.",
      website: "https://arcwv.org",
      phone: "304-768-8878"
    },
    {
      name: "Celebrate EDU – West Virginia",
      category: "respite",
      description: "Offers respite care, behavioral support, and community integration services for individuals with autism and developmental disabilities and their families in West Virginia.",
      website: "https://celebrateedu.com",
      phone: "304-906-6005"
    },

  ],

  "Wisconsin": [

    // Government & Public Benefits Services
    {
      name: "Wisconsin Department of Health Services – Family Care and IRIS Programs",
      category: "government",
      description: "Administers Wisconsin's Medicaid HCBS managed care programs (Family Care and Include, Respect, I Self-Direct) for adults with developmental disabilities, including autism.",
      website: "https://www.dhs.wisconsin.gov/familycare/index.htm",
      phone: "608-266-0554"
    },
    {
      name: "Wisconsin Department of Public Instruction – Special Education",
      category: "government",
      description: "Oversees IDEA compliance and special education for Wisconsin students with disabilities, providing guidance on IEPs, dispute resolution, and family rights.",
      website: "https://dpi.wi.gov/sped",
      phone: "608-266-1649"
    },
    {
      name: "Wisconsin Birth to 3 Program",
      category: "government",
      description: "Wisconsin's IDEA Part C early intervention program connecting families of children birth to age 3 with developmental delays to service coordinators, therapies, and family support plans.",
      website: "https://www.dhs.wisconsin.gov/birthto3/index.htm",
      phone: "608-267-3270"
    },

    // Parent & Family Support Networks
    {
      name: "WI FACETS – Wisconsin Family Assistance Center for Education, Training and Support",
      category: "parent-family",
      description: "Wisconsin's federally funded Parent Training and Information Center offering free advocacy training, workshops, and peer support for families of children with disabilities.",
      website: "https://www.wifacets.org",
      phone: "414-374-4645"
    },
    {
      name: "Autism Society of Wisconsin",
      category: "parent-family",
      description: "Provides community programs, support groups, and resource navigation for individuals with autism and their families throughout Wisconsin.",
      website: "https://www.autismwisconsin.org",
      phone: "888-428-8476"
    },

    // Advocacy, Legal & Rights Protection
    {
      name: "Disability Rights Wisconsin",
      category: "advocacy",
      description: "Wisconsin's federally designated Protection & Advocacy organization providing free legal services and advocacy for Wisconsinites with disabilities, including those on the autism spectrum.",
      website: "https://www.drwi.org",
      phone: "800-928-8778"
    },
    {
      name: "Wisconsin Board for People with Developmental Disabilities",
      category: "advocacy",
      description: "Federally funded council promoting self-determination, community inclusion, and systems change for Wisconsinites with developmental disabilities through advocacy and grants.",
      website: "https://www.wi-bpdd.org",
      phone: "608-266-7826"
    },

    // Respite, Wellness & Specialized Caregiver Services
    {
      name: "The Arc Wisconsin",
      category: "respite",
      description: "Statewide organization providing advocacy, family support, and respite resources for individuals with intellectual and developmental disabilities and their families across Wisconsin.",
      website: "https://www.arcwisconsin.org",
      phone: "608-846-2860"
    },
    {
      name: "Waisman Center – Respite and Family Support",
      category: "respite",
      description: "University of Wisconsin research and service center providing assessment, family support, respite coordination, and training for individuals with developmental disabilities and autism.",
      website: "https://www.waisman.wisc.edu",
      phone: "608-263-5940"
    },

  ],

  "Wyoming": [

    // Government & Public Benefits Services
    {
      name: "Wyoming Department of Health – Developmental Disabilities Division",
      category: "government",
      description: "Administers Wyoming's Medicaid HCBS waivers and state services for individuals with developmental disabilities, including autism, supporting residential, employment, and family programs.",
      website: "https://health.wyo.gov/healthcarefin/dd",
      phone: "307-777-5246"
    },
    {
      name: "Wyoming Department of Education – Special Education",
      category: "government",
      description: "Oversees IDEA compliance and special education for Wyoming students with disabilities, providing guidance on IEPs, dispute resolution, and family rights.",
      website: "https://edu.wyoming.gov/educators/special-education",
      phone: "307-777-7417"
    },
    {
      name: "Wyoming Early Intervention Program (Part C)",
      category: "government",
      description: "Wyoming's IDEA Part C program connecting families of children birth to age 3 with developmental delays to service coordinators, therapies, and individualized family service plans.",
      website: "https://health.wyo.gov/publichealth/children/early-intervention",
      phone: "307-777-6921"
    },

    // Parent & Family Support Networks
    {
      name: "Wyoming Parent Information Center (WPIC)",
      category: "parent-family",
      description: "Wyoming's federally funded Parent Training and Information Center offering free advocacy training, workshops, and one-on-one support to families of children with disabilities.",
      website: "https://www.wpic.org",
      phone: "800-660-9742"
    },
    {
      name: "Autism Society of Wyoming",
      category: "parent-family",
      description: "Provides community support, awareness events, and resource navigation for individuals with autism and their families throughout Wyoming.",
      website: "https://www.autismwy.org",
      phone: "307-632-4008"
    },

    // Advocacy, Legal & Rights Protection
    {
      name: "Disability Rights Wyoming",
      category: "advocacy",
      description: "Wyoming's federally designated Protection & Advocacy organization providing free legal services and advocacy for Wyomingites with disabilities, including those on the autism spectrum.",
      website: "https://www.disabilityrightswy.org",
      phone: "307-632-3496"
    },
    {
      name: "Wyoming Governor's Council on Developmental Disabilities",
      category: "advocacy",
      description: "Federally funded council promoting self-determination, community inclusion, and systems change for Wyomingites with developmental disabilities through advocacy and grants.",
      website: "https://gcdd.wyo.gov",
      phone: "307-777-6972"
    },

    // Respite, Wellness & Specialized Caregiver Services
    {
      name: "The Arc of Teton Valley",
      category: "respite",
      description: "Provides advocacy, family support, and community resources for individuals with intellectual and developmental disabilities and their families in Teton County and greater Wyoming.",
      website: "https://www.arctetonvalley.org",
      phone: "307-733-3080"
    },
    {
      name: "Wyoming Respite Network",
      category: "respite",
      description: "Connects Wyoming families of individuals with disabilities to respite care providers, caregiver training, and support resources across the state.",
      website: "https://health.wyo.gov/aging/wyoming-respite-network",
      phone: "307-777-7986"
    },

  ],

  "Colorado": [

    // Government & Public Benefits Services
    {
      name: "Colorado Department of Health Care Policy and Financing – IDD Medicaid Waivers",
      category: "government",
      description: "Administers multiple Medicaid waiver programs for individuals with intellectual and developmental disabilities, including the Children's Extensive Support (CES) Waiver, Supported Living Services (SLS) Waiver, and IDD Waiver, funding home and community-based services, respite, and family supports.",
      website: "https://hcpf.colorado.gov"
    },
    {
      name: "Colorado Department of Human Services – Office of Community Living",
      category: "government",
      description: "Oversees the statewide system of services for individuals with developmental disabilities, contracting with 20 Community Centered Boards (CCBs) to determine eligibility, provide case management, and coordinate family support services including respite and the Family Support Services Program (FSSP).",
      website: "https://cdhs.colorado.gov"
    },
    {
      name: "Early Intervention Colorado",
      category: "government",
      description: "Colorado's Part C IDEA program providing family-centered services and supports for infants and toddlers (birth–age 3) with developmental delays or disabilities; emphasizes building family capacity through service coordination and in-home supports.",
      website: "https://eicolorado.org"
    },
    {
      name: "JFK Partners – University of Colorado Anschutz (UCEDD)",
      category: "government",
      description: "Colorado's federally designated University Center for Excellence in Developmental Disabilities; provides interdisciplinary training, research, and community services benefiting individuals with developmental disabilities and their families, and houses Colorado's LEND program.",
      website: "https://medschool.cuanschutz.edu/jfk-partners"
    },

    // Parent & Family Support Networks
    {
      name: "Ability Connection Colorado – Parent to Parent of Colorado",
      category: "parent-family",
      description: "A statewide peer support program matching families of children and adults with disabilities or special health care needs with trained volunteer parent mentors who share similar experiences; provides emotional and informational support at no cost.",
      website: "https://abilityconnectioncolorado.org",
      phone: "877-472-7201"
    },
    {
      name: "Autism Society of Colorado",
      category: "parent-family",
      description: "Statewide affiliate of the Autism Society of America; connects autistic individuals and their families to peer support, community programs, resource navigation, and advocacy, with expanded service offerings across Colorado.",
      website: "https://autismcolorado.org"
    },
    {
      name: "Family Voices Colorado",
      category: "parent-family",
      description: "Colorado's affiliate of the national Family Voices network; provides information, resources, and peer support for families of children and youth with special health care needs, and helps families connect with state agencies and insurance systems.",
      website: "https://familyvoicesco.org"
    },
    {
      name: "PEAK Parent Center",
      category: "parent-family",
      description: "Colorado's federally designated Parent Training and Information (PTI) Center; provides free training, information, and technical assistance to families of children with all disabilities from birth through age 26, equipping parents to advocate effectively in educational and community settings.",
      website: "https://peakparent.org",
      phone: "719-531-9400"
    },

    // Advocacy, Legal & Rights Protection
    {
      name: "Colorado Developmental Disabilities Council",
      category: "advocacy",
      description: "Colorado's federally mandated DD Council; advocates for policy changes and funds initiatives to advance the independence, productivity, and full community integration of individuals with developmental disabilities and their families.",
      website: "https://cddc.colorado.gov"
    },
    {
      name: "Disability Law Colorado",
      category: "advocacy",
      description: "Colorado's federally designated Protection and Advocacy (P&A) organization; provides free legal representation, advocacy, and education to protect the civil, human, and legal rights of Coloradans with disabilities, including those with autism and developmental disabilities.",
      website: "https://disabilitylawco.org",
      phone: "800-288-1376"
    },
    {
      name: "The Arc of Colorado",
      category: "advocacy",
      description: "Statewide advocacy organization supporting individuals with intellectual and developmental disabilities and their families through legislative advocacy, IEP assistance, community inclusion efforts, and connection to local Arc chapters across the state.",
      website: "https://thearcofco.org"
    },

    // Respite, Wellness & Specialized Caregiver Services
    {
      name: "Colorado Respite Coalition – Easterseals Colorado",
      category: "respite",
      description: "A statewide program of Easterseals Colorado strengthening Colorado's lifespan respite care network; offers a bilingual (English/Spanish) Navigating Respite Care guide, caregiver resource navigation, and coalition-building among respite providers statewide.",
      website: "https://coloradorespitecoalition.org"
    },

  ],

};
