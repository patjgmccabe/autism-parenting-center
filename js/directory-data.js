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

};
