import mongoose from 'mongoose';
export {};

const promoSchema = new mongoose.Schema(
	{
		// affiliate: { type: mongoose.Schema.Types.ObjectId, ref: 'Affiliate' },
		user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
		promo_code: { type: String },
		admin_only: { type: Boolean, default: true },
		affiliate_only: { type: Boolean, default: false },
		sponsor_only: { type: Boolean, default: false },
		excluded_categories: { type: Array },
		excluded_products: { type: Array },
		included_categories: { type: Array },
		included_products: { type: Array },
		percentage_off: { type: Number },
		free_shipping: { type: Boolean },
		exclude: { type: Boolean },
		include: { type: Boolean },
		amount_off: { type: Number },
		single_use: { type: Boolean },
		time_limit: { type: Boolean },
		start_date: { type: Date },
		end_date: { type: Date },
		used_once: { type: Boolean, default: false },
		minimum_total: { type: Number, default: 0 },
		active: { type: Boolean, default: true },
		deleted: { type: Boolean, default: false }
	},
	{
		timestamps: true
	}
);

const promoModel = mongoose.model('Promo', promoSchema);

export default promoModel;
