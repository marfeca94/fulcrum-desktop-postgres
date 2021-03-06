"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = `
BEGIN TRANSACTION;

DROP VIEW IF EXISTS __VIEW_SCHEMA__.records_view;

CREATE OR REPLACE VIEW __VIEW_SCHEMA__.records_view AS
SELECT
  records.row_resource_id AS record_id,
  records.form_resource_id AS form_id,
  forms.name AS form_name,
  records.project_resource_id AS project_id,
  projects.name AS project_name,
  records.assigned_to_resource_id AS assigned_to_id,
  assignment.name AS assigned_to_name,
  records.status AS status,
  records.latitude AS latitude,
  records.longitude AS longitude,
  records.created_at AS created_at,
  records.updated_at AS updated_at,
  records.version AS version,
  records.created_by_resource_id AS created_by_id,
  created_by.name AS created_by_name,
  records.updated_by_resource_id AS updated_by_id,
  updated_by.name AS updated_by_name,
  records.server_created_at AS server_created_at,
  records.server_updated_at AS server_updated_at,
  records.geometry AS geometry,
  records.altitude AS altitude,
  records.speed AS speed,
  records.course AS course,
  records.horizontal_accuracy AS horizontal_accuracy,
  records.vertical_accuracy AS vertical_accuracy,
  records.changeset_resource_id AS changeset_id,
  records.title AS title,
  records.created_latitude AS created_latitude,
  records.created_longitude AS created_longitude,
  records.created_geometry AS created_geometry,
  records.created_altitude AS created_altitude,
  records.created_horizontal_accuracy AS created_horizontal_accuracy,
  records.updated_latitude AS updated_latitude,
  records.updated_longitude AS updated_longitude,
  records.updated_geometry AS updated_geometry,
  records.updated_altitude AS updated_altitude,
  records.updated_horizontal_accuracy AS updated_horizontal_accuracy,
  records.created_duration AS created_duration,
  records.updated_duration AS updated_duration,
  records.edited_duration AS edited_duration
FROM __SCHEMA__.system_records records
LEFT OUTER JOIN __SCHEMA__.system_forms forms ON records.form_id = forms.row_id
LEFT OUTER JOIN __SCHEMA__.system_projects projects ON records.project_id = projects.row_id
LEFT OUTER JOIN __SCHEMA__.system_memberships assignment ON records.assigned_to_id = assignment.row_id
LEFT OUTER JOIN __SCHEMA__.system_memberships created_by ON records.created_by_id = created_by.row_id
LEFT OUTER JOIN __SCHEMA__.system_memberships updated_by ON records.updated_by_id = updated_by.row_id;

INSERT INTO __SCHEMA__.migrations (name) VALUES ('003');

COMMIT;
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3ZlcnNpb24tMDAzLnNxbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztrQkFBZ0IiLCJmaWxlIjoidmVyc2lvbi0wMDMuc3FsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYFxuQkVHSU4gVFJBTlNBQ1RJT047XG5cbkRST1AgVklFVyBJRiBFWElTVFMgX19WSUVXX1NDSEVNQV9fLnJlY29yZHNfdmlldztcblxuQ1JFQVRFIE9SIFJFUExBQ0UgVklFVyBfX1ZJRVdfU0NIRU1BX18ucmVjb3Jkc192aWV3IEFTXG5TRUxFQ1RcbiAgcmVjb3Jkcy5yb3dfcmVzb3VyY2VfaWQgQVMgcmVjb3JkX2lkLFxuICByZWNvcmRzLmZvcm1fcmVzb3VyY2VfaWQgQVMgZm9ybV9pZCxcbiAgZm9ybXMubmFtZSBBUyBmb3JtX25hbWUsXG4gIHJlY29yZHMucHJvamVjdF9yZXNvdXJjZV9pZCBBUyBwcm9qZWN0X2lkLFxuICBwcm9qZWN0cy5uYW1lIEFTIHByb2plY3RfbmFtZSxcbiAgcmVjb3Jkcy5hc3NpZ25lZF90b19yZXNvdXJjZV9pZCBBUyBhc3NpZ25lZF90b19pZCxcbiAgYXNzaWdubWVudC5uYW1lIEFTIGFzc2lnbmVkX3RvX25hbWUsXG4gIHJlY29yZHMuc3RhdHVzIEFTIHN0YXR1cyxcbiAgcmVjb3Jkcy5sYXRpdHVkZSBBUyBsYXRpdHVkZSxcbiAgcmVjb3Jkcy5sb25naXR1ZGUgQVMgbG9uZ2l0dWRlLFxuICByZWNvcmRzLmNyZWF0ZWRfYXQgQVMgY3JlYXRlZF9hdCxcbiAgcmVjb3Jkcy51cGRhdGVkX2F0IEFTIHVwZGF0ZWRfYXQsXG4gIHJlY29yZHMudmVyc2lvbiBBUyB2ZXJzaW9uLFxuICByZWNvcmRzLmNyZWF0ZWRfYnlfcmVzb3VyY2VfaWQgQVMgY3JlYXRlZF9ieV9pZCxcbiAgY3JlYXRlZF9ieS5uYW1lIEFTIGNyZWF0ZWRfYnlfbmFtZSxcbiAgcmVjb3Jkcy51cGRhdGVkX2J5X3Jlc291cmNlX2lkIEFTIHVwZGF0ZWRfYnlfaWQsXG4gIHVwZGF0ZWRfYnkubmFtZSBBUyB1cGRhdGVkX2J5X25hbWUsXG4gIHJlY29yZHMuc2VydmVyX2NyZWF0ZWRfYXQgQVMgc2VydmVyX2NyZWF0ZWRfYXQsXG4gIHJlY29yZHMuc2VydmVyX3VwZGF0ZWRfYXQgQVMgc2VydmVyX3VwZGF0ZWRfYXQsXG4gIHJlY29yZHMuZ2VvbWV0cnkgQVMgZ2VvbWV0cnksXG4gIHJlY29yZHMuYWx0aXR1ZGUgQVMgYWx0aXR1ZGUsXG4gIHJlY29yZHMuc3BlZWQgQVMgc3BlZWQsXG4gIHJlY29yZHMuY291cnNlIEFTIGNvdXJzZSxcbiAgcmVjb3Jkcy5ob3Jpem9udGFsX2FjY3VyYWN5IEFTIGhvcml6b250YWxfYWNjdXJhY3ksXG4gIHJlY29yZHMudmVydGljYWxfYWNjdXJhY3kgQVMgdmVydGljYWxfYWNjdXJhY3ksXG4gIHJlY29yZHMuY2hhbmdlc2V0X3Jlc291cmNlX2lkIEFTIGNoYW5nZXNldF9pZCxcbiAgcmVjb3Jkcy50aXRsZSBBUyB0aXRsZSxcbiAgcmVjb3Jkcy5jcmVhdGVkX2xhdGl0dWRlIEFTIGNyZWF0ZWRfbGF0aXR1ZGUsXG4gIHJlY29yZHMuY3JlYXRlZF9sb25naXR1ZGUgQVMgY3JlYXRlZF9sb25naXR1ZGUsXG4gIHJlY29yZHMuY3JlYXRlZF9nZW9tZXRyeSBBUyBjcmVhdGVkX2dlb21ldHJ5LFxuICByZWNvcmRzLmNyZWF0ZWRfYWx0aXR1ZGUgQVMgY3JlYXRlZF9hbHRpdHVkZSxcbiAgcmVjb3Jkcy5jcmVhdGVkX2hvcml6b250YWxfYWNjdXJhY3kgQVMgY3JlYXRlZF9ob3Jpem9udGFsX2FjY3VyYWN5LFxuICByZWNvcmRzLnVwZGF0ZWRfbGF0aXR1ZGUgQVMgdXBkYXRlZF9sYXRpdHVkZSxcbiAgcmVjb3Jkcy51cGRhdGVkX2xvbmdpdHVkZSBBUyB1cGRhdGVkX2xvbmdpdHVkZSxcbiAgcmVjb3Jkcy51cGRhdGVkX2dlb21ldHJ5IEFTIHVwZGF0ZWRfZ2VvbWV0cnksXG4gIHJlY29yZHMudXBkYXRlZF9hbHRpdHVkZSBBUyB1cGRhdGVkX2FsdGl0dWRlLFxuICByZWNvcmRzLnVwZGF0ZWRfaG9yaXpvbnRhbF9hY2N1cmFjeSBBUyB1cGRhdGVkX2hvcml6b250YWxfYWNjdXJhY3ksXG4gIHJlY29yZHMuY3JlYXRlZF9kdXJhdGlvbiBBUyBjcmVhdGVkX2R1cmF0aW9uLFxuICByZWNvcmRzLnVwZGF0ZWRfZHVyYXRpb24gQVMgdXBkYXRlZF9kdXJhdGlvbixcbiAgcmVjb3Jkcy5lZGl0ZWRfZHVyYXRpb24gQVMgZWRpdGVkX2R1cmF0aW9uXG5GUk9NIF9fU0NIRU1BX18uc3lzdGVtX3JlY29yZHMgcmVjb3Jkc1xuTEVGVCBPVVRFUiBKT0lOIF9fU0NIRU1BX18uc3lzdGVtX2Zvcm1zIGZvcm1zIE9OIHJlY29yZHMuZm9ybV9pZCA9IGZvcm1zLnJvd19pZFxuTEVGVCBPVVRFUiBKT0lOIF9fU0NIRU1BX18uc3lzdGVtX3Byb2plY3RzIHByb2plY3RzIE9OIHJlY29yZHMucHJvamVjdF9pZCA9IHByb2plY3RzLnJvd19pZFxuTEVGVCBPVVRFUiBKT0lOIF9fU0NIRU1BX18uc3lzdGVtX21lbWJlcnNoaXBzIGFzc2lnbm1lbnQgT04gcmVjb3Jkcy5hc3NpZ25lZF90b19pZCA9IGFzc2lnbm1lbnQucm93X2lkXG5MRUZUIE9VVEVSIEpPSU4gX19TQ0hFTUFfXy5zeXN0ZW1fbWVtYmVyc2hpcHMgY3JlYXRlZF9ieSBPTiByZWNvcmRzLmNyZWF0ZWRfYnlfaWQgPSBjcmVhdGVkX2J5LnJvd19pZFxuTEVGVCBPVVRFUiBKT0lOIF9fU0NIRU1BX18uc3lzdGVtX21lbWJlcnNoaXBzIHVwZGF0ZWRfYnkgT04gcmVjb3Jkcy51cGRhdGVkX2J5X2lkID0gdXBkYXRlZF9ieS5yb3dfaWQ7XG5cbklOU0VSVCBJTlRPIF9fU0NIRU1BX18ubWlncmF0aW9ucyAobmFtZSkgVkFMVUVTICgnMDAzJyk7XG5cbkNPTU1JVDtcbmA7XG4iXX0=