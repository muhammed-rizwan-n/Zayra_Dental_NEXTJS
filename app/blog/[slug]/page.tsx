import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock,
  User,
  Tag,
  ArrowLeft,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import blogData from "../blogData.json";

interface BlogPostProps {
  params: {
    slug: string;
  };
  searchParams: {
    preview?: string;
  };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({
  params,
}: BlogPostProps): Promise<Metadata> {
  const post = blogData.find((post) => post.slug === params.slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | Zayra Dental",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | Zayra Dental Leeds Blog`,
    description: post.metaDescription,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://zayradental.co.uk/blog/${post.slug}`,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

// Get blog post content based on slug
function getBlogPostContent(slug: string) {
  const post = blogData.find((post) => post.slug === slug);
  if (!post) return null;

  // Extended content for each blog post
  const contentMap: Record<string, string> = {
    "importance-of-regular-dental-checkups": `
      <p>Regular dental checkups are the cornerstone of preventive dental care. At Zayra Dental, we recommend visiting our Leeds practice every six months for comprehensive oral health assessments that can prevent minor issues from becoming major problems.</p>

      <h2>Why Every Six Months?</h2>
      <p>The six-month interval isn't arbitrary—it's based on decades of dental research. Most dental problems develop slowly, and this timeframe allows us to:</p>
      <ul>
        <li>Detect early signs of tooth decay before they become painful</li>
        <li>Identify gum disease in its initial stages</li>
        <li>Monitor existing dental work for wear or damage</li>
        <li>Screen for oral cancer and other serious conditions</li>
        <li>Provide professional cleaning to remove plaque and tartar buildup</li>
      </ul>

      <h2>What to Expect During Your Visit</h2>
      <p>Our comprehensive dental examinations at Zayra Dental include:</p>
      <ul>
        <li><strong>Visual Examination:</strong> We thoroughly inspect your teeth, gums, and mouth</li>
        <li><strong>X-rays:</strong> Digital imaging to detect hidden problems</li>
        <li><strong>Professional Cleaning:</strong> Removal of plaque and tartar</li>
        <li><strong>Oral Cancer Screening:</strong> Early detection saves lives</li>
        <li><strong>Personalized Advice:</strong> Tailored recommendations for your oral health</li>
      </ul>

      <h2>The Cost of Prevention vs Treatment</h2>
      <p>Regular checkups are far more cost-effective than emergency treatments. A simple filling costs significantly less than a root canal or crown, and preventive care often prevents the need for extensive procedures altogether.</p>

      <blockquote>
      "Prevention is always better than cure. Regular dental visits allow us to maintain your oral health proactively, ensuring you keep your natural teeth for life." - Dr. Reshma Parambil
      </blockquote>

      <h2>Signs You Shouldn't Wait for Your Next Checkup</h2>
      <p>While regular checkups are essential, certain symptoms require immediate attention:</p>
      <ul>
        <li>Persistent tooth pain or sensitivity</li>
        <li>Bleeding or swollen gums</li>
        <li>Loose teeth or changes in your bite</li>
        <li>Chronic bad breath</li>
        <li>Mouth sores that don't heal</li>
      </ul>

      <h2>Book Your Next Checkup</h2>
      <p>Don't wait for problems to develop. Regular dental checkups at Zayra Dental ensure your smile stays healthy and beautiful. Our experienced team in Leeds is committed to providing gentle, thorough care in a comfortable environment.</p>
    `,
    "teeth-whitening-options-leeds": `
      <p>A bright, confident smile can transform your appearance and boost your self-esteem. At Zayra Dental in Leeds, we offer professional teeth whitening treatments that deliver superior results compared to over-the-counter options.</p>

      <h2>Professional vs At-Home Whitening: The Key Differences</h2>
      
      <h3>Professional In-Office Whitening</h3>
      <p>Our professional whitening treatments use higher-concentration bleaching agents that are not available in over-the-counter products:</p>
      <ul>
        <li><strong>Faster Results:</strong> Achieve 3-8 shades whiter in just one session</li>
        <li><strong>Safer Application:</strong> Protective measures for gums and tooth enamel</li>
        <li><strong>Customized Treatment:</strong> Tailored to your specific needs and goals</li>
        <li><strong>Professional Supervision:</strong> Monitored by experienced dental professionals</li>
        <li><strong>Longer-Lasting:</strong> Results can last 2-3 years with proper care</li>
      </ul>

      <h3>At-Home Whitening Products</h3>
      <p>While convenient, over-the-counter products have significant limitations:</p>
      <ul>
        <li>Lower concentration bleaching agents</li>
        <li>One-size-fits-all approach</li>
        <li>Risk of uneven whitening</li>
        <li>Potential for tooth sensitivity</li>
        <li>Temporary results that fade quickly</li>
      </ul>

      <h2>Our Professional Whitening Options</h2>
      
      <h3>In-Office Power Whitening</h3>
      <p>Our signature whitening treatment combines advanced technology with professional expertise:</p>
      <ul>
        <li>Custom-fitted protection for your gums</li>
        <li>Professional-grade whitening gel</li>
        <li>LED light activation for enhanced results</li>
        <li>Immediate, dramatic results in 60-90 minutes</li>
      </ul>

      <h3>Take-Home Professional Kits</h3>
      <p>For those who prefer to whiten at home with professional supervision:</p>
      <ul>
        <li>Custom-made whitening trays</li>
        <li>Professional-strength whitening gel</li>
        <li>Detailed instructions and ongoing support</li>
        <li>Gradual whitening over 2-3 weeks</li>
      </ul>

      <blockquote>
      "The difference between professional and over-the-counter whitening is like the difference between a professional photographer and a smartphone camera—both can take pictures, but the quality and results are incomparable." - Dr. Reshma Parambil
      </blockquote>

      <h2>Who is a Good Candidate for Teeth Whitening?</h2>
      <p>Most people can benefit from professional teeth whitening, but certain factors affect candidacy:</p>
      <ul>
        <li><strong>Good Candidates:</strong> Healthy teeth and gums, realistic expectations</li>
        <li><strong>Best Results:</strong> Yellow or brown stains from coffee, tea, wine, or smoking</li>
        <li><strong>Limited Results:</strong> Gray stains, tetracycline staining, or stains from trauma</li>
        <li><strong>Not Suitable:</strong> Pregnant or nursing women, severe tooth sensitivity</li>
      </ul>

      <h2>Maintaining Your White Smile</h2>
      <p>To maximize the longevity of your whitening results:</p>
      <ul>
        <li>Avoid staining foods and beverages immediately after treatment</li>
        <li>Use a straw when drinking coffee, tea, or wine</li>
        <li>Maintain excellent oral hygiene</li>
        <li>Consider touch-up treatments every 6-12 months</li>
        <li>Don't smoke or use tobacco products</li>
      </ul>
    `,
    "dental-implants-complete-guide": `
      <p>Dental implants represent the gold standard in tooth replacement technology. At Zayra Dental, our experienced team provides comprehensive implant services to Leeds patients seeking permanent solutions for missing teeth.</p>

      <h2>What Are Dental Implants?</h2>
      <p>Dental implants are titanium posts surgically placed into the jawbone to replace missing tooth roots. They provide a stable foundation for crowns, bridges, or dentures, offering the closest thing to natural teeth available in modern dentistry.</p>

      <h2>The Dental Implant Process</h2>
      
      <h3>1. Initial Consultation and Planning</h3>
      <p>Your implant journey begins with a comprehensive evaluation:</p>
      <ul>
        <li>Detailed examination of your oral health</li>
        <li>3D imaging to assess bone density and structure</li>
        <li>Medical history review</li>
        <li>Treatment planning and timeline discussion</li>
        <li>Cost estimate and financing options</li>
      </ul>

      <h3>2. Implant Placement Surgery</h3>
      <p>The surgical procedure is typically performed under local anesthesia:</p>
      <ul>
        <li>Precise placement of the titanium implant</li>
        <li>Minimal discomfort during and after the procedure</li>
        <li>Detailed post-operative care instructions</li>
        <li>Healing period of 3-6 months for osseointegration</li>
      </ul>

      <h3>3. Healing and Osseointegration</h3>
      <p>This crucial phase allows the implant to fuse with your jawbone:</p>
      <ul>
        <li>Natural bone grows around the implant</li>
        <li>Creates a permanent, stable foundation</li>
        <li>Preserves jawbone density and facial structure</li>
        <li>Regular check-ups to monitor healing progress</li>
      </ul>

      <h3>4. Crown Placement</h3>
      <p>Once healing is complete, we attach your custom crown:</p>
      <ul>
        <li>Digital impressions for perfect fit</li>
        <li>Custom-crafted crown to match your natural teeth</li>
        <li>Final placement and bite adjustment</li>
        <li>Instructions for long-term care</li>
      </ul>

      <h2>Benefits of Dental Implants</h2>
      
      <h3>Functional Advantages</h3>
      <ul>
        <li><strong>Natural Feel:</strong> Function just like your natural teeth</li>
        <li><strong>Full Chewing Power:</strong> Eat all your favorite foods without restriction</li>
        <li><strong>Clear Speech:</strong> No slipping or clicking like with dentures</li>
        <li><strong>Bone Preservation:</strong> Prevents jawbone deterioration</li>
      </ul>

      <h3>Aesthetic Benefits</h3>
      <ul>
        <li>Identical appearance to natural teeth</li>
        <li>Preserves facial structure and prevents aging</li>
        <li>No visible hardware or clasps</li>
        <li>Confident smile restoration</li>
      </ul>

      <h3>Long-term Value</h3>
      <ul>
        <li>Permanent solution with proper care</li>
        <li>No need to replace adjacent healthy teeth</li>
        <li>Cost-effective over time</li>
        <li>Improved quality of life</li>
      </ul>

      <blockquote>
      "Dental implants don't just replace missing teeth—they restore confidence, function, and quality of life. They're truly life-changing for our patients." - Dr. Reshma Parambil
      </blockquote>

      <h2>Am I a Candidate for Dental Implants?</h2>
      <p>Most people who have lost teeth are candidates for implants:</p>
      <ul>
        <li><strong>Good General Health:</strong> Able to undergo minor surgery</li>
        <li><strong>Adequate Bone:</strong> Sufficient bone to support the implant</li>
        <li><strong>Healthy Gums:</strong> Free from active periodontal disease</li>
        <li><strong>Commitment to Care:</strong> Willing to maintain excellent oral hygiene</li>
      </ul>

      <h2>Caring for Your Dental Implants</h2>
      <p>With proper care, dental implants can last a lifetime:</p>
      <ul>
        <li>Regular brushing and flossing</li>
        <li>Routine dental checkups and cleanings</li>
        <li>Avoid smoking and excessive alcohol</li>
        <li>Use a nightguard if you grind your teeth</li>
        <li>Maintain overall health and nutrition</li>
      </ul>
    `,
    "emergency-dental-care-leeds": `
      <p>Dental emergencies can be frightening and painful. Knowing when to seek immediate dental care can save your tooth and prevent more serious complications. Zayra Dental offers emergency dental services to Leeds patients when urgent care is needed.</p>

      <h2>What Constitutes a Dental Emergency?</h2>
      <p>Not all dental problems require emergency treatment, but certain situations demand immediate attention:</p>

      <h3>Immediate Emergency Situations</h3>
      <ul>
        <li><strong>Knocked-Out Tooth:</strong> Time is critical—seek treatment within 30 minutes</li>
        <li><strong>Severe Tooth Pain:</strong> Unbearable pain that prevents normal activities</li>
        <li><strong>Facial Swelling:</strong> Especially if affecting breathing or swallowing</li>
        <li><strong>Uncontrolled Bleeding:</strong> From mouth or gums that won't stop</li>
        <li><strong>Trauma to Face/Jaw:</strong> From accidents or sports injuries</li>
        <li><strong>Lost Filling with Pain:</strong> Exposed nerve causing severe discomfort</li>
      </ul>

      <h3>Urgent But Not Emergency</h3>
      <ul>
        <li>Mild to moderate tooth pain</li>
        <li>Lost filling without pain</li>
        <li>Chipped tooth without pain</li>
        <li>Broken denture or appliance</li>
        <li>Food stuck between teeth</li>
      </ul>

      <h2>What to Do in a Dental Emergency</h2>

      <h3>Knocked-Out Tooth</h3>
      <ol>
        <li>Handle the tooth by the crown, not the root</li>
        <li>Rinse gently with water if dirty</li>
        <li>Try to reinsert into the socket if possible</li>
        <li>If not possible, store in milk or saliva</li>
        <li>Seek emergency treatment immediately</li>
      </ol>

      <h3>Severe Tooth Pain</h3>
      <ol>
        <li>Rinse mouth with warm salt water</li>
        <li>Use dental floss to remove trapped food</li>
        <li>Take over-the-counter pain relief as directed</li>
        <li>Apply cold compress to outside of cheek</li>
        <li>Contact our emergency line immediately</li>
      </ol>

      <h3>Broken or Chipped Tooth</h3>
      <ol>
        <li>Rinse mouth with warm water</li>
        <li>Save any broken pieces</li>
        <li>Apply gauze to any bleeding areas</li>
        <li>Use cold compress for swelling</li>
        <li>Call for urgent appointment</li>
      </ol>

      <h3>Facial Swelling</h3>
      <ol>
        <li>Apply ice pack to affected area</li>
        <li>Take anti-inflammatory medication</li>
        <li>Rinse with warm salt water</li>
        <li>Seek immediate professional care</li>
        <li>If breathing is affected, go to A&E</li>
      </ol>

      <blockquote>
      "In dental emergencies, every minute counts. Don't hesitate to call us—we're here to help when you need us most." - Dr. Reshma Parambil
      </blockquote>

      <h2>Our Emergency Dental Services</h2>
      <p>Zayra Dental provides comprehensive emergency care:</p>
      <ul>
        <li>Pain management and relief</li>
        <li>Emergency tooth extraction</li>
        <li>Temporary restorations</li>
        <li>Treatment of dental infections</li>
        <li>Trauma and injury care</li>
        <li>Emergency root canal therapy</li>
        <li>Broken appliance repair</li>
      </ul>

      <h2>Prevention is the Best Medicine</h2>
      <p>While we're always here for emergencies, prevention reduces your risk:</p>
      <ul>
        <li>Wear mouthguards during sports</li>
        <li>Avoid chewing hard objects like ice or pencils</li>
        <li>Don't use teeth as tools</li>
        <li>Maintain regular dental checkups</li>
        <li>Address minor problems before they become major</li>
        <li>Keep our emergency number handy</li>
      </ul>

      <h2>When to Go to A&E Instead</h2>
      <p>Some situations require hospital emergency care:</p>
      <ul>
        <li>Difficulty breathing or swallowing</li>
        <li>Severe facial trauma with possible fractures</li>
        <li>Uncontrolled bleeding that won't stop</li>
        <li>Signs of serious infection (fever, difficulty swallowing)</li>
        <li>Loss of consciousness from dental trauma</li>
      </ul>

      <h2>Contact Information for Emergencies</h2>
      <p>For dental emergencies in Leeds, contact Zayra Dental immediately at 0113 248 8398. If our office is closed, listen to our emergency message for after-hours instructions.</p>
    `,
    "oral-hygiene-tips-healthy-teeth": `
      <p>Maintaining excellent oral hygiene is the foundation of dental health. Our dental team at Zayra Dental shares professional tips and techniques for keeping your teeth and gums healthy between visits to our Leeds practice.</p>

      <h2>The Fundamentals of Oral Hygiene</h2>
      <p>Good oral hygiene isn't just about brushing your teeth. It's a comprehensive approach to maintaining oral health that includes proper technique, timing, and the right tools.</p>

      <h2>Brushing: More Than Just Moving the Brush</h2>
      
      <h3>Proper Brushing Technique</h3>
      <ol>
        <li><strong>Choose the Right Brush:</strong> Soft-bristled, appropriate size for your mouth</li>
        <li><strong>Angle Matters:</strong> Hold brush at 45-degree angle to gums</li>
        <li><strong>Gentle Circular Motions:</strong> Small, circular movements rather than back-and-forth</li>
        <li><strong>Cover All Surfaces:</strong> Outer, inner, and chewing surfaces of each tooth</li>
        <li><strong>Don't Forget Your Tongue:</strong> Brush gently to remove bacteria</li>
        <li><strong>Time It Right:</strong> Brush for a full two minutes</li>
      </ol>

      <h3>When to Brush</h3>
      <ul>
        <li>First thing in the morning</li>
        <li>Before bed (most important)</li>
        <li>30-60 minutes after meals (if possible)</li>
        <li>Never immediately after acidic foods or drinks</li>
      </ul>

      <h2>Flossing: The Unsung Hero of Oral Health</h2>
      <p>Flossing removes plaque and bacteria from areas your toothbrush can't reach—between teeth and under the gumline.</p>

      <h3>Proper Flossing Technique</h3>
      <ol>
        <li>Use 18 inches of floss, wind most around middle fingers</li>
        <li>Hold 1-2 inches of floss between thumbs and forefingers</li>
        <li>Slide gently between teeth using back-and-forth motion</li>
        <li>Curve floss around base of each tooth</li>
        <li>Go beneath gumline gently</li>
        <li>Use clean sections of floss for each tooth</li>
      </ol>

      <h3>Flossing Alternatives</h3>
      <ul>
        <li><strong>Water Flossers:</strong> Great for people with braces or bridges</li>
        <li><strong>Interdental Brushes:</strong> Useful for larger gaps between teeth</li>
        <li><strong>Floss Picks:</strong> Convenient but less effective than traditional floss</li>
        <li><strong>Pre-threaded Flossers:</strong> Good for those with dexterity issues</li>
      </ul>

      <h2>Mouthwash: The Finishing Touch</h2>
      <p>While not essential, therapeutic mouthwash can provide additional benefits:</p>
      <ul>
        <li><strong>Antimicrobial:</strong> Reduces bacteria and plaque formation</li>
        <li><strong>Fluoride:</strong> Strengthens tooth enamel</li>
        <li><strong>Fresh Breath:</strong> Neutralizes odor-causing bacteria</li>
        <li><strong>Timing:</strong> Use after brushing and flossing, not as a replacement</li>
      </ul>

      <blockquote>
      "The best oral hygiene routine is the one you'll actually follow consistently. Find products and techniques that work for you and make them a daily habit." - Dr. Reshma Parambil
      </blockquote>

      <h2>Common Oral Hygiene Mistakes</h2>
      <ul>
        <li><strong>Brushing Too Hard:</strong> Can damage enamel and gums</li>
        <li><strong>Using Old Toothbrushes:</strong> Replace every 3-4 months</li>
        <li><strong>Rushing the Process:</strong> Take time to be thorough</li>
        <li><strong>Skipping Flossing:</strong> Removes only 60% of plaque without flossing</li>
        <li><strong>Rinsing After Brushing:</strong> Dilutes protective fluoride</li>
        <li><strong>Ignoring the Tongue:</strong> Harbors bacteria that cause bad breath</li>
      </ul>

      <h2>Diet and Oral Health</h2>
      <p>What you eat significantly impacts your oral health:</p>

      <h3>Foods That Promote Oral Health</h3>
      <ul>
        <li><strong>Dairy Products:</strong> Calcium and phosphorus strengthen teeth</li>
        <li><strong>Leafy Greens:</strong> High in vitamins and minerals</li>
        <li><strong>Almonds:</strong> Protein and calcium without added sugar</li>
        <li><strong>Apples:</strong> Natural cleaning action and fiber</li>
        <li><strong>Carrots:</strong> Stimulate saliva production</li>
        <li><strong>Green Tea:</strong> Contains natural fluoride and antioxidants</li>
      </ul>

      <h3>Foods to Limit</h3>
      <ul>
        <li>Sugary snacks and drinks</li>
        <li>Sticky candies and dried fruits</li>
        <li>Acidic foods and beverages</li>
        <li>Hard candies that dissolve slowly</li>
        <li>Starchy foods that stick to teeth</li>
      </ul>

      <h2>Special Considerations</h2>

      <h3>For People with Braces</h3>
      <ul>
        <li>Use orthodontic toothbrush or electric brush</li>
        <li>Floss threaders or water flossers</li>
        <li>Avoid hard, sticky, or sugary foods</li>
        <li>Rinse after meals</li>
        <li>Regular orthodontic cleanings</li>
      </ul>

      <h3>For Sensitive Teeth</h3>
      <ul>
        <li>Use desensitizing toothpaste</li>
        <li>Soft-bristled toothbrush</li>
        <li>Avoid acidic foods and drinks</li>
        <li>Don't brush immediately after acidic consumption</li>
        <li>Professional fluoride treatments</li>
      </ul>

      <h3>As You Age</h3>
      <ul>
        <li>Electric toothbrushes for easier cleaning</li>
        <li>Stay hydrated to combat dry mouth</li>
        <li>Regular dental visits become even more important</li>
        <li>Consider fluoride rinses</li>
        <li>Be aware of medication effects on oral health</li>
      </ul>
    `,
    "composite-veneers-vs-porcelain-veneers": `
      <p>Veneers can dramatically transform your smile, but choosing between composite and porcelain options requires careful consideration. At Zayra Dental, we help Leeds patients select the ideal veneer type for their unique needs, budget, and aesthetic goals.</p>

      <h2>Understanding Dental Veneers</h2>
      <p>Veneers are thin shells that cover the front surface of teeth to improve their appearance. They can correct various cosmetic issues including discoloration, chips, gaps, and minor misalignment.</p>

      <h2>Composite Veneers: The Direct Approach</h2>
      
      <h3>What Are Composite Veneers?</h3>
      <p>Composite veneers are made from tooth-colored resin material applied directly to your teeth in a single appointment. This technique is also known as "direct veneers" or "bonding."</p>

      <h3>Advantages of Composite Veneers</h3>
      <ul>
        <li><strong>Cost-Effective:</strong> Significantly less expensive than porcelain</li>
        <li><strong>Single Visit:</strong> Completed in one appointment</li>
        <li><strong>Minimal Preparation:</strong> Little to no tooth structure removed</li>
        <li><strong>Reversible:</strong> Can be removed if desired</li>
        <li><strong>Repairable:</strong> Can be fixed if chipped or damaged</li>
        <li><strong>Natural Appearance:</strong> Can be shaped and colored to match existing teeth</li>
      </ul>

      <h3>Limitations of Composite Veneers</h3>
      <ul>
        <li><strong>Shorter Lifespan:</strong> Typically last 5-7 years</li>
        <li><strong>Staining:</strong> More prone to discoloration over time</li>
        <li><strong>Durability:</strong> Less resistant to chips and wear</li>
        <li><strong>Maintenance:</strong> Require more frequent touch-ups</li>
        <li><strong>Polish:</strong> May lose their shine more quickly</li>
      </ul>

      <h2>Porcelain Veneers: The Premium Choice</h2>

      <h3>What Are Porcelain Veneers?</h3>
      <p>Porcelain veneers are custom-made ceramic shells created in a dental laboratory and bonded to your teeth. They require tooth preparation and typically take 2-3 visits to complete.</p>

      <h3>Advantages of Porcelain Veneers</h3>
      <ul>
        <li><strong>Superior Aesthetics:</strong> Most natural-looking and lustrous</li>
        <li><strong>Longevity:</strong> Can last 15-20 years with proper care</li>
        <li><strong>Stain Resistance:</strong> Highly resistant to discoloration</li>
        <li><strong>Durability:</strong> Strong and chip-resistant</li>
        <li><strong>Precision:</strong> Exact color and shape matching</li>
        <li><strong>Gum Compatibility:</strong> Biocompatible and gum-friendly</li>
      </ul>

      <h3>Considerations for Porcelain Veneers</h3>
      <ul>
        <li><strong>Higher Cost:</strong> More expensive initial investment</li>
        <li><strong>Irreversible:</strong> Tooth structure is permanently altered</li>
        <li><strong>Multiple Visits:</strong> Requires several appointments</li>
        <li><strong>Replacement:</strong> Difficult and expensive to repair if damaged</li>
        <li><strong>Sensitivity:</strong> Temporary sensitivity may occur</li>
      </ul>

      <h2>Side-by-Side Comparison</h2>

      <h3>Cost Comparison</h3>
      <ul>
        <li><strong>Composite Veneers:</strong> £200-£600 per tooth</li>
        <li><strong>Porcelain Veneers:</strong> £800-£1,500 per tooth</li>
        <li><strong>Long-term Value:</strong> Porcelain offers better value over time</li>
      </ul>

      <h3>Durability</h3>
      <ul>
        <li><strong>Composite:</strong> 5-7 years average lifespan</li>
        <li><strong>Porcelain:</strong> 15-20 years average lifespan</li>
        <li><strong>Maintenance:</strong> Both require good oral hygiene</li>
      </ul>

      <h3>Aesthetics</h3>
      <ul>
        <li><strong>Composite:</strong> Good appearance, may dull over time</li>
        <li><strong>Porcelain:</strong> Superior aesthetics, maintains luster</li>
        <li><strong>Customization:</strong> Both can be customized to your preferences</li>
      </ul>

      <blockquote>
      "The choice between composite and porcelain veneers depends on your priorities: immediate results and lower cost versus long-term aesthetics and durability." - Dr. Reshma Parambil
      </blockquote>

      <h2>Which Option is Right for You?</h2>

      <h3>Choose Composite Veneers If:</h3>
      <ul>
        <li>Budget is a primary concern</li>
        <li>You want immediate results</li>
        <li>You're testing out a new look</li>
        <li>You have minor cosmetic issues</li>
        <li>You prefer reversible treatment</li>
        <li>You need only 1-2 veneers</li>
      </ul>

      <h3>Choose Porcelain Veneers If:</h3>
      <ul>
        <li>You want the best aesthetic results</li>
        <li>Long-term value is important</li>
        <li>You have significant cosmetic concerns</li>
        <li>You want stain-resistant results</li>
        <li>You're doing a full smile makeover</li>
        <li>You prioritize durability</li>
      </ul>

      <h2>The Treatment Process</h2>

      <h3>Composite Veneer Process</h3>
      <ol>
        <li>Consultation and treatment planning</li>
        <li>Minimal tooth preparation</li>
        <li>Direct application of composite resin</li>
        <li>Shaping and polishing</li>
        <li>Final adjustments and bite check</li>
      </ol>

      <h3>Porcelain Veneer Process</h3>
      <ol>
        <li>Comprehensive consultation and planning</li>
        <li>Tooth preparation and impressions</li>
        <li>Temporary veneers placement</li>
        <li>Laboratory fabrication (1-2 weeks)</li>
        <li>Final bonding and adjustments</li>
      </ol>

      <h2>Caring for Your Veneers</h2>
      <p>Regardless of type, proper care extends veneer lifespan:</p>
      <ul>
        <li>Maintain excellent oral hygiene</li>
        <li>Avoid biting hard objects</li>
        <li>Don't use teeth as tools</li>
        <li>Wear a nightguard if you grind teeth</li>
        <li>Regular dental checkups and cleanings</li>
        <li>Avoid excessive force when chewing</li>
      </ul>
    `,
  };

  return {
    ...post,
    fullContent: contentMap[slug] || post.content,
  };
}

export default function BlogPost({ params, searchParams }: BlogPostProps) {
  const post = getBlogPostContent(params.slug);
  const isPreview = searchParams.preview === "true";

  if (!post) {
    notFound();
  }

  // Get related posts (exclude current post)
  const relatedPosts = blogData
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `https://zayradental.co.uk${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: "Principal Dentist",
      worksFor: {
        "@type": "Organization",
        name: "Zayra Dental",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "Zayra Dental",
      logo: {
        "@type": "ImageObject",
        url: "https://zayradental.co.uk/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://zayradental.co.uk/blog/${post.slug}`,
    },
    articleSection: post.category,
    keywords: post.tags.join(", "),
    wordCount: post.fullContent.split(" ").length,
  };

  // Preview mode - minimal styling for iframe display
  if (isPreview) {
    return (
      <div
        style={{
          padding: "2rem",
          fontFamily: "system-ui, sans-serif",
          lineHeight: "1.6",
          color: "#333",
          backgroundColor: "#fff",
          minHeight: "100vh",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            marginBottom: "1rem",
            color: "#b67758",
          }}
        >
          {post.title}
        </h1>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginBottom: "2rem",
            fontSize: "0.9rem",
            color: "#666",
          }}
        >
          <span>📅 {new Date(post.date).toLocaleDateString("en-GB")}</span>
          <span>⏱️ {post.readTime}</span>
          <span>👤 {post.author}</span>
        </div>
        <div
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.8",
          }}
        >
          {post.excerpt}
        </div>
      </div>
    );
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main>
        {/* Blog Post Header */}
        <section className="blog-post-header">
          <div className="container-modern">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div data-aos="fade-up">
                  <Link
                    href="/blog"
                    className="d-inline-flex align-items-center gap-2 text-decoration-none text-primary-brown mb-4"
                  >
                    <ArrowLeft size={18} />
                    Back to Blog
                  </Link>

                  <div className="blog-post-meta">
                    <div className="d-flex align-items-center gap-2 text-subtle">
                      <Calendar size={16} />
                      <span>
                        {new Date(post.date).toLocaleDateString("en-GB")}
                      </span>
                    </div>
                    <div className="d-flex align-items-center gap-2 text-subtle">
                      <Clock size={16} />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="d-flex align-items-center gap-2 text-subtle">
                      <User size={16} />
                      <span>{post.author}</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <Tag size={16} className="text-primary-brown" />
                      <span className="text-primary-brown fw-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <h1 className="heading-primary text-primary-brown mb-4">
                    {post.title}
                  </h1>

                  <p className="lead text-subtle">{post.excerpt}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Post Content */}
        <section className="section-modern bg-white">
          <div className="container-modern">
            <div className="row">
              <div className="col-lg-2 d-none d-lg-block">
                {/* Social Share */}
                <div className="social-share">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                    className="social-share-btn share-facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}&text=${encodeURIComponent(post.title)}`}
                    className="social-share-btn share-twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                    className="social-share-btn share-linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(post.title + " " + (typeof window !== "undefined" ? window.location.href : ""))}`}
                    className="social-share-btn share-whatsapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on WhatsApp"
                  >
                    <MessageCircle size={20} />
                  </a>
                </div>
              </div>

              <div className="col-lg-8">
                <article className="blog-post-content" data-aos="fade-up">
                  <div dangerouslySetInnerHTML={{ __html: post.fullContent }} />
                </article>

                {/* Mobile Social Share */}
                <div className="d-lg-none">
                  <div className="social-share">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                      className="social-share-btn share-facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}&text=${encodeURIComponent(post.title)}`}
                      className="social-share-btn share-twitter"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter size={20} />
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                      className="social-share-btn share-linkedin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href={`https://wa.me/?text=${encodeURIComponent(post.title + " " + (typeof window !== "undefined" ? window.location.href : ""))}`}
                      className="social-share-btn share-whatsapp"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle size={20} />
                    </a>
                  </div>
                </div>

                {/* Author Bio */}
                <div className="author-bio" data-aos="fade-up">
                  <div className="row align-items-center">
                    <div className="col-md-3 text-center mb-3 mb-md-0">
                      <div
                        className="rounded-circle bg-primary-brown d-inline-flex align-items-center justify-content-center"
                        style={{ width: "80px", height: "80px" }}
                      >
                        <User size={40} className="text-white" />
                      </div>
                    </div>
                    <div className="col-md-9">
                      <h4 className="fw-semibold mb-2">About {post.author}</h4>
                      <p className="text-subtle mb-0">
                        Dr. Reshma Parambil is the principal dentist at Zayra
                        Dental in Leeds. With extensive experience in cosmetic
                        and restorative dentistry, she is committed to providing
                        exceptional patient care and helping patients achieve
                        their best smiles.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="d-flex flex-wrap gap-2 mt-4" data-aos="fade-up">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="badge rounded-pill bg-light text-primary-brown"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="related-posts">
            <div className="container-modern">
              <div className="row">
                <div className="col-12">
                  <h3
                    className="heading-tertiary text-center mb-5"
                    data-aos="fade-up"
                  >
                    Related Articles
                  </h3>
                </div>
              </div>

              <div className="row g-4">
                {relatedPosts.map((relatedPost, index) => (
                  <div
                    key={relatedPost.id}
                    className="col-lg-4"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      className="text-decoration-none"
                    >
                      <article className="card-modern h-100 overflow-hidden p-0">
                        <div className="blog-preview-frame-small">
                          <iframe
                            src={`/blog/${relatedPost.slug}?preview=true`}
                            title={`Preview of ${relatedPost.title}`}
                            className="blog-preview-iframe-small"
                            loading="lazy"
                          />
                        </div>

                        <div className="p-3">
                          <h4 className="h6 fw-semibold mb-2 text-primary">
                            {relatedPost.title}
                          </h4>
                          <p className="text-subtle small mb-2 line-clamp-2">
                            {relatedPost.excerpt}
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <span className="small text-primary-brown fw-medium">
                              {relatedPost.category}
                            </span>
                            <ArrowRight
                              size={12}
                              className="text-primary-brown"
                            />
                          </div>
                        </div>
                      </article>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Call to Action */}
        <section className="section-modern bg-professional">
          <div className="container-modern">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <div data-aos="fade-up">
                  <h2 className="heading-secondary text-primary-brown mb-4">
                    Ready to Transform Your Smile?
                  </h2>
                  <p className="lead text-subtle mb-5">
                    Book a consultation with our expert dental team in Leeds to
                    discuss your oral health needs and create a personalized
                    treatment plan.
                  </p>
                  <div className="d-flex flex-wrap gap-3 justify-content-center">
                    <Link href="/appointment" className="btn-primary-modern">
                      <Calendar size={18} />
                      Book Consultation
                    </Link>
                    <Link href="/contact" className="btn-secondary-modern">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
