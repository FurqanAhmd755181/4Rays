import { PricingTable } from './component/PricingTable'
import { CTASection } from './component/CTASection'
import FAQSection from './component/FAQSection'
import CallToAction from './component/CallToAction'
import VideoPresentation from './component/VideoPresentation'

const PricingPage = () => {
  return (
    <div className='flex-col lg:flex-col p-10 items-center justify-center'>
<div>
<PricingTable/>


</div>
<div>
<CTASection/>


</div>
<div>
<FAQSection/>

</div>
<div>
<CallToAction/>
</div>
<div className='flex w-full items-center justify-center '>

<VideoPresentation/>
</div>

    </div>
  
  )
}

export default PricingPage;
