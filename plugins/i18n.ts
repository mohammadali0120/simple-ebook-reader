import { configure } from 'vee-validate'
export default function (ctx: any) {
  configure({
    defaultMessage: (field, values) => {
      values._field_ = ctx.app.i18n.t(`${field}`)
      return ctx.app.i18n.t(`validation.${values._rule_}`, values)
    },
  })
}
