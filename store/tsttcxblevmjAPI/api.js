import axios from "axios"
const tsttcxblevmjAPI = axios.create({
  baseURL: "https://tst-tc2223-xblevmj-104226.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return tsttcxblevmjAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return tsttcxblevmjAPI.post(`/api/v1/login/`, payload)
}
function api_v1_person_list(payload) {
  return tsttcxblevmjAPI.get(`/api/v1/person/`)
}
function api_v1_person_create(payload) {
  return tsttcxblevmjAPI.post(`/api/v1/person/`, payload)
}
function api_v1_person_retrieve(payload) {
  return tsttcxblevmjAPI.get(`/api/v1/person/${payload.id}/`)
}
function api_v1_person_update(payload) {
  return tsttcxblevmjAPI.put(`/api/v1/person/${payload.id}/`, payload)
}
function api_v1_person_partial_update(payload) {
  return tsttcxblevmjAPI.patch(`/api/v1/person/${payload.id}/`, payload)
}
function api_v1_person_destroy(payload) {
  return tsttcxblevmjAPI.delete(`/api/v1/person/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return tsttcxblevmjAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return tsttcxblevmjAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return tsttcxblevmjAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return tsttcxblevmjAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return tsttcxblevmjAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return tsttcxblevmjAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return tsttcxblevmjAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return tsttcxblevmjAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return tsttcxblevmjAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return tsttcxblevmjAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return tsttcxblevmjAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return tsttcxblevmjAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_person_list,
  api_v1_person_create,
  api_v1_person_retrieve,
  api_v1_person_update,
  api_v1_person_partial_update,
  api_v1_person_destroy,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
