// data/allTreatments.js
import { botox } from './treatments/wrinkleReducers/botox';
import { hydrafacial} from './treatments/facials/hydrafacial/hydrafacial';
import { casmaraPurifying } from './treatments/facials/casmara/purifying';
import { casmaraInfinity } from './treatments/facials/casmara/infinity';
import { casmaraRetinolProAge } from './treatments/facials/casmara/retinol';

export const allTreatments = [botox, hydrafacial, casmaraPurifying, casmaraInfinity, casmaraRetinolProAge];