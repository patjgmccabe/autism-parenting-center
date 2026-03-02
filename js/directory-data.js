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

};
