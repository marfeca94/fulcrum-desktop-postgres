"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = `
BEGIN TRANSACTION;

DROP FUNCTION IF EXISTS FCM_ConvertToFloat(input_value text);
CREATE OR REPLACE FUNCTION FCM_ConvertToFloat(input_value text)
  RETURNS double precision AS
$BODY$
DECLARE float_value double precision DEFAULT NULL;
BEGIN
  BEGIN
    float_value := input_value::double precision;
  EXCEPTION WHEN OTHERS THEN
    RETURN NULL;
  END;
RETURN float_value;
END;
$BODY$
LANGUAGE 'plpgsql' IMMUTABLE STRICT;

COMMIT;
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3ZlcnNpb24tMDA0LnNxbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztrQkFBZ0IiLCJmaWxlIjoidmVyc2lvbi0wMDQuc3FsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYFxuQkVHSU4gVFJBTlNBQ1RJT047XG5cbkRST1AgRlVOQ1RJT04gSUYgRVhJU1RTIEZDTV9Db252ZXJ0VG9GbG9hdChpbnB1dF92YWx1ZSB0ZXh0KTtcbkNSRUFURSBPUiBSRVBMQUNFIEZVTkNUSU9OIEZDTV9Db252ZXJ0VG9GbG9hdChpbnB1dF92YWx1ZSB0ZXh0KVxuICBSRVRVUk5TIGRvdWJsZSBwcmVjaXNpb24gQVNcbiRCT0RZJFxuREVDTEFSRSBmbG9hdF92YWx1ZSBkb3VibGUgcHJlY2lzaW9uIERFRkFVTFQgTlVMTDtcbkJFR0lOXG4gIEJFR0lOXG4gICAgZmxvYXRfdmFsdWUgOj0gaW5wdXRfdmFsdWU6OmRvdWJsZSBwcmVjaXNpb247XG4gIEVYQ0VQVElPTiBXSEVOIE9USEVSUyBUSEVOXG4gICAgUkVUVVJOIE5VTEw7XG4gIEVORDtcblJFVFVSTiBmbG9hdF92YWx1ZTtcbkVORDtcbiRCT0RZJFxuTEFOR1VBR0UgJ3BscGdzcWwnIElNTVVUQUJMRSBTVFJJQ1Q7XG5cbkNPTU1JVDtcbmA7XG4iXX0=